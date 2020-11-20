import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const user = new Schema(
  {
    username: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      length: 10,
      default: null,
    },
    avatar: {
      type: String,
      default: null,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);

user.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    const genSalt = await bcrypt.genSalt(Number(process.env.saltRounds));
    user.password = await bcrypt.hash(user.password, genSalt);
  }
  next();
});

user.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email }).select(
    '-phone -updatedAt -createdAt -__v',
  );
  if (!user) {
    return null;
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return null;
  }
  return user;
};

const User = mongoose.model('User', user, 'users');

export default User;
