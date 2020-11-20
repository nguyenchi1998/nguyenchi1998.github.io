import httpStatus from 'http-status';
import { success, fail } from '../../helper/response';
import services from './services';

export default {
  all: async (req, res) => {
    try {
      const users = await services.all();
      res.status(httpStatus.OK).send(success(httpStatus.OK, 'Success', users));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await services.show(id);
      res.status(httpStatus.OK).send(success(httpStatus.OK, 'Success', user));
    } catch (err) {
      res
        .status(httpStatus.NOT_FOUND)
        .send(fail(httpStatus.NOT_FOUND, err.message));
    }
  },
  create: async (req, res) => {
    try {
      await services.create(req.body);
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Create role success'));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(success(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await services.delete(id);
      res
        .status(httpStatus.OK)
        .send(success(httpStatus.OK, 'Delete role success'));
    } catch (err) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(success(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
};
