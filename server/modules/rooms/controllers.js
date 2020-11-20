import httpStatus from 'http-status';
import { success, fail } from '../../helper/response';
import Room from './schema';
import AuthService from '../auth/services';
import services from './services';

export default {
  all: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await services.allByUser(userId).populate('friend');
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Success', user.room || []));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.body;
      const room = await services.show(id).populate('members', 'messages');
      res.status(httpStatus.OK).send(success(httpStatus.OK, 'Success', room));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  create: async (req, res) => {
    const { name } = req.body;
    const token = req.header('Authorization').trim().replace('Bearer ', '');
    const user = await AuthService.getUserFromToken(token);
    try {
      await Room.create({
        name: name,
        members: [user.id],
      });
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Create room success'));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(success(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
};
