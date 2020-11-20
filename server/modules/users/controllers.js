import httpStatus from 'http-status';
import { success, fail } from '../../helper/response';
import Role from '../roles/schema';
import service from './services';

export default {
  all: async (req, res) => {
    try {
      const users = await service.all().populate('roles', 'name');
      if (users) {
        res
          .status(httpStatus.OK)
          .send(success(httpStatus.OK, 'Success', users));
      } else {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send(success(httpStatus.OK, 'Fail'));
      }
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  allListFriendByUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await service.findById(id).populate(['friends']);
      res.status(httpStatus.OK).send(user.friends || []);
    } catch (err) {
      res
        .status(httpStatus.NOT_FOUND)
        .send(fail(httpStatus.NOT_FOUND, 'User not found'));
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await service.findById(id);
      res.status(httpStatus.OK).send(success(httpStatus.OK, 'Success', user));
    } catch (err) {
      res
        .status(httpStatus.NOT_FOUND)
        .send(fail(httpStatus.NOT_FOUND, 'User not found'));
    }
  },
  create: async (req, res) => {
    try {
      if (!req.body.roles) {
        req.body.roles = [];
        req.body.roles.push(await Role.findOne({ name: 'user' }));
      }
      const result = await service.createUser(req.body);
      if (result) {
        res
          .status(httpStatus.OK)
          .send(success(httpStatus.OK, 'Create user success'));
      } else {
        res
          .status(httpStatus.OK)
          .send(success(httpStatus.INTERNAL_SERVER_ERROR, 'Create user fail'));
      }
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(success(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  update: async (req, res) => {
    const { name, username, phone, avatar } = req.body;
    const { id } = req.params;

    const update = await service.updateById(id, {
      name: name,
      username: username,
      phone: phone,
      avatar: avatar === undefined ? avatar : '',
    });
    if (update.nModified) {
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Update user success'));
    } else {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, 'Update user fail'));
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await service.delete(id);
      if (result) {
        res
          .status(httpStatus.OK)
          .send(success(httpStatus.OK, 'Delete user success'));
      } else {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send(fail(httpStatus.INTERNAL_SERVER_ERROR, 'Delete user fail'));
      }
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
};
