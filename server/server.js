import path       from 'path';
import http       from 'http';
import express    from 'express';
import socketIO   from 'socket.io';

import {generateMessage, generateLocationMessage} from './utils/message';

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app     = express();
var server  = http.createServer(app);
var io      = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('Message created', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback( ); // to acknowledge we got request
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Connected to ${port}`);
});
