import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const room = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Room = mongoose.model('Room', room, 'rooms');

export default Room;
