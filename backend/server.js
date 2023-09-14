const express = require("express");
const socket = require("socket.io");


const PORT = 3000;
const app = express();
const server = app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});


app.use(express.static("public"));

// Socket setup
const io = socket(server);
const activeUsers = new Set();
io.on("connection", function (socket) {
    console.log("Made socket connection");


    socket.on("message", function (data) {
        console.log(data)
    });

});