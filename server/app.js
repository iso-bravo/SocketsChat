const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat', msg);
    })
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
})

server.listen(3000, () => {
    console.log('listening on port http://localhost:3000');
});