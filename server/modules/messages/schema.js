import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const message = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Message = mongoose.model('Message', message, 'messages');

export default Message;
