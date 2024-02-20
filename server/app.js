const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const path = require('path');

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat', JSON.stringify({ id: socket.id, msg: msg }));
    });
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

server.listen(3000, () => {
    console.log('listening on port http://localhost:3000');
});