import Joi from 'joi';
import httpStatus from 'http-status';
import { fail } from '../../helper/response';

const rule = (method) => {
  let rule = null;
  if (method === 'POST') {
    rule = {
      name: Joi.string().required(),
      members: Joi.array(),
      messages: Joi.array(),
    };
  }
  return rule;
};

export default (req, res, next) => {
  const { error } = Joi.validate(req.body, rule(req.method));
  if (error) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send(fail(httpStatus.BAD_REQUEST, error.details[0].message));
  }
  next();
};
