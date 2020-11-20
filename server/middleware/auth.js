import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import * as response from '../helper/response';
import User from '../modules/users/schema';
import * as lodash from 'lodash';

export default {
  checkAuth: (req, res, next) => {
    try {
      const token = req.header('Authorization').trim().replace('Bearer ', '');
      if (!token)
        return res
          .status(httpStatus.UNAUTHORIZED)
          .send(
            response.fail(
              httpStatus.UNAUTHORIZED,
              'Access denied. No token provided',
            ),
          );
      req.user = jwt.verify(token, process.env.privateKey);
      next();
    } catch (ex) {
      res
        .status(httpStatus.UNAUTHORIZED)
        .send(response.fail(httpStatus.UNAUTHORIZED, 'Invalid token.'));
    }
  },
  checkRole: (...allowed) => {
    const isAllowed = (role) => lodash.intersection(role, allowed).length;
    return async (req, res, next) => {
      try {
        const token = req.header('Authorization').trim().replace('Bearer ', '');
        const data = jwt.verify(token, process.env.privateKey);
        const user = await User.findOne({ _id: data._id }).populate(
          'roles',
          'name',
        );
        if (user && isAllowed(user.roles.map((el) => el.name))) {
          next();
        } else {
          res
            .status(httpStatus.FORBIDDEN)
            .send(response.fail(httpStatus.FORBIDDEN, 'Access denied'));
        }
      } catch (error) {
        res
          .status(httpStatus.FORBIDDEN)
          .send(response.fail(httpStatus.FORBIDDEN, 'Access denied'));
      }
    };
  },
};
