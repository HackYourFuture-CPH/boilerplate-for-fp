import * as dotenv from 'dotenv';
import app from './app';
dotenv.config();

// Module dependencies.
const http = require('http');

// Get port from environment and store in Express.
const port = process.env.PORT;
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('listening', onListening);

// Event listener for HTTP server "listening" event.
function onListening() {
  console.debug(
    `API ready on http://localhost:${port}\nCheck out http://localhost:${port}/api/documentation`,
  );
}
