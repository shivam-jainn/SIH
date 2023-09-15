const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3002;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

app.use(express.static("public"));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Socket setup - require socketHandlers after defining handleSocketConnection
const { handleSocketConnection } = require("./socketHandlers");

io.on("connection", (socket) => {
    console.log("Made socket connection");
    handleSocketConnection(socket);
});
