import path       from 'path';
import http       from 'http';
import express    from 'express';
import socketIO   from 'socket.io';

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app     = express();
var server  = http.createServer(app);
var io      = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('Message created', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Connected to ${port}`);
});
