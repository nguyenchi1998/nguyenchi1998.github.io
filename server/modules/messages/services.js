import Message from './schema';

const DELETE_STATUS = 0;
export default {
  all: (room) => Message.find({ room }).select('-__v'),
  delete: (id) =>
    Message.updateOne(
      { _id: id },
      {
        status: DELETE_STATUS,
      },
    ),
  create: (message) => Message.create(message),
};
