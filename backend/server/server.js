const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../../', 'frontend', 'dist')));

// Serve 'index.html' as the entry point
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'frontend', 'dist', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Example machine statistics
  const machineStats = {
    temperature: 35.2, // Example temperature in Celsius
    vibration: 0.1, // Example vibration level
    soundWaves: 78, // Example sound wave intensity
    humidity: 45, // Example humidity percentage
    surroundingTemperature: 28.5, // Example surrounding temperature
  };

  // Send machine statistics to the client
  socket.emit('machine-stats', machineStats);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
