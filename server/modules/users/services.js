import User from './schema';

export default {
  all: () => User.find().select('-createdAt -updatedAt -__v'),
  findById: (id) => User.findById(id).select('-createdAt -updatedAt -__v'),
  createUser: (infor) => User.create(infor),
  updateById: (id, updateInfo) => User.updateOne({ _id: id }, updateInfo),
  delete: (id) => User.findByIdAndDelete({ _id: id }),
};
