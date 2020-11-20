import Role from './schema';

const DELETE_STATUS = 0;
export default {
  all: () => Role.find().select('-__v'),
  show: (id) => Role.findById(id).select('-__v'),
  delete: (id) =>
    Role.updateOne(
      { _id: id },
      {
        status: DELETE_STATUS,
      },
    ),
  create: (role) => Role.create(role),
};
