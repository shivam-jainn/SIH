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

// Simulate machine data
let machineData = {
  temperature: 0,
  vibration: 0,
  soundWaves: 0,
  humidity: 0,
  surroundingTemp: 0,
};

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Send machine data to the client every 2 seconds
  const machineDataInterval = setInterval(() => {
    // Update machine data
    machineData = {
      temperature: Math.random() * 100,
      vibration: Math.random() * 10,
      soundWaves: Math.random() * 1000,
      humidity: Math.random() * 100,
      surroundingTemp: Math.random() * 100,
    };
    // Emit the updated machine data to all clients
    io.emit("machine_data", machineData);
  }, 2000); // Update data every 2 seconds

  socket.on("join_room", (data) => {
    socket.join(data.room);
  });

  socket.on("send_message", (data) => {
    // Broadcast the message to everyone in the same room
    io.to(data.room).emit("receive_message", {
      user: socket.id, // You can use socket.id as the user for demonstration purposes
      message: data.message,
    });
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
    clearInterval(machineDataInterval); // Clear the machine data interval on disconnect
  });
});

// Define an HTTP endpoint to get machine data
app.get("/api/machine", (req, res) => {
  res.json(machineData);
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
