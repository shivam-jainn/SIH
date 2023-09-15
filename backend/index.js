const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Simulate machine data and send it to the client every 2 seconds
  setInterval(() => {
    const machineData = {
      temperature: Math.random() * 100,
      vibration: Math.random() * 10,
      soundWaves: Math.random() * 1000,
      humidity: Math.random() * 100,
      surroundingTemp: Math.random() * 100,
    };
    socket.emit("machine_data", machineData);
  }, 2000); // Update data every 2 seconds

    socket.on("join_room", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
