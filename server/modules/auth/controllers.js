import httpStatus from 'http-status';
import User from '../users/schema';
import { success } from '../../helper/response';
import services from './services';
import Role from '../roles/schema';

export default {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user && user === null) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send(
          success(
            httpStatus.NOT_FOUND,
            'Login failed! Check authentication credentials',
          ),
      );
    }
    return res.status(httpStatus.OK).send(
      success(httpStatus.OK, 'Login success', {
        access: await services.generateAuthToken(user),
        refresh: await services.generateAuthRefreshToken(user),
        id: user._id,
      }),
    );
  },
  register: async (req, res) => {
    try {
      if (!req.body.roles) {
        req.body.roles = [];
        req.body.roles.push(await Role.findOne({ name: 'user' }));
      }
      const result = await User.create(req.body);
      if (result) {
        return res
          .status(httpStatus.OK)
          .send(success(httpStatus.OK, 'Create user success'));
      }
      return res
        .status(httpStatus.OK)
        .send(success(httpStatus.INTERNAL_SERVER_ERROR, 'Create user fail'));
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(success(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  info: async (req, res) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const { user } = await services.getUserFromToken(token);
      if (user)
        return res
          .status(httpStatus.OK)
          .send(success(httpStatus.OK, 'Success', user));
      return res
        .status(httpStatus.NOT_FOUND)
        .send(success(httpStatus.NOT_FOUND, 'Fail'));
    } catch (err) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(success(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
};
