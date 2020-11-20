import Room from './schema';

const DELETE_STATUS = 0;
export default {
  allByUser: () => {
    return Room.find().select('-createdAt -updatedAt -__v');
  },
  show: (id) => {
    return Room.findById(id).select('-createdAt -updatedAt -__v');
  },
  delete: (id) => {
    return Room.updateOne(
      { _id: id },
      {
        status: DELETE_STATUS,
      },
    );
  },
  create: (room) => {
    return Room.create(room);
  },
};
