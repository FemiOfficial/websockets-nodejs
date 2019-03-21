const express = require('express');
const app = express();

import SocketClass from './socket';

const PORT = 8000;

app.use(express.static('client'));
const server = app.listen(PORT, () => {
    console.log(`server is listening from ${PORT}`);
});
const io = SocketClass.io(server);

io.on('connection', (socket) => {
    console.log('socket connection made with the client');

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    });

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data)
    });
});
 