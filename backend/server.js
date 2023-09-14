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


    socket.on("iot", function (data) {
        // socket.to("commonroom").emit("iot",data);
        socket.broadcast.emit("iot",data);
        console.log(data);
    });

    socket.on("admin",(data)=>{
        socket.join("commonroom");
    })



    socket.on("message", function (data) {
        console.log(data);
    });

});


io.on("addExtension",(socket,deviceid)=>{
    console.log("joined dashboard");
    console.log(deviceid);
    io.join("dashboard");
})