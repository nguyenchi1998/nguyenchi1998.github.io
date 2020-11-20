import bluebird from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = bluebird;

const url = 'mongodb://localhost:27017/chat';

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

export { connection, mongoose };
