// #!/usr/bin/env node

/**
 * Module dependencies.
 */
import { config } from 'dotenv';

config();
import app from '../app';
import debugLib from 'debug';

const debug = debugLib('express-es6-sample:server');

const port = normalizePort(process.env.PORT || '3000');
app.app.set('port', port);

app.server.listen(port);

app.server.on('error', onError);
app.server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = app.server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log(`Listening on ${bind}`);
  debug('Listening on ' + bind);
}
