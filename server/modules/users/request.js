import httpStatus from 'http-status';
import Joi from 'joi';
import { fail } from '../../helper/response';

const createUser = (req, res, next) => {
  const { error } = Joi.validate(req.body, {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
      .required()
      .regex(/09|01|06\d{8}/),
    password: Joi.string().required().min(1),
    avatar: Joi.string().default(''),
    roles: Joi.array(),
    username: Joi.string(),
  });
  if (error)
    return res
      .status(httpStatus.BAD_REQUEST)
      .send(fail(httpStatus.BAD_REQUEST, error.details[0].message));
  next();
};

export default {
  createUser,
};
