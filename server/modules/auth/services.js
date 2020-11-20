import jwt from 'jsonwebtoken';
import User from '../users/schema';

export default {
  getUserFromToken: async (token) => {
    const data = jwt.verify(token, process.env.privateKey);
    return {
      id: data._id,
      user: await User.findById(data._id)
        .lean()
        .select('-password -createdAt -updatedAt -__v'),
    };
  },
  generateAuthToken: async (user) => {
    return jwt.sign({ _id: user._id }, process.env.privateKey, {
      expiresIn: process.env.expiresToken || '3m',
    });
  },

  generateAuthRefreshToken: async (user) => {
    return jwt.sign({ _id: user._id }, process.env.privateKey, {
      expiresIn: process.env.expiresRefresh || '10m',
    });
  },
};
