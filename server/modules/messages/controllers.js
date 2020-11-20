import httpStatus from 'http-status';
import { success, fail } from '../../helper/response';
import jwt from 'jsonwebtoken';
import services from './services';

export default {
  all: async (req, res) => {
    const { roomId } = req.param;
    try {
      const messages = await services.all(roomId);
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Success', messages));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  create: async (req, res) => {
    try {
      const token = req.header('Authorization').trim().replace('Bearer ', '');
      const user = await jwt.verify(token, process.env.privateKey);
      req.body.user = user._id;
      await services.create(req.body);
      res.io.emit('getMessages', await services.create(req.body.room));
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Create message success'));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await services.delete(id);
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Delete message success'));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
};
