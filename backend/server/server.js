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

// Function to generate random machine statistics
function generateRandomMachineStats() {
  return {
    temperature: (Math.random() * 50 + 10).toFixed(2), // Random temperature between 10 and 60 degrees Celsius
    vibration: (Math.random() * 2).toFixed(2), // Random vibration level between 0 and 2
    soundWaves: Math.floor(Math.random() * 100), // Random sound wave intensity between 0 and 100
    humidity: Math.floor(Math.random() * 100), // Random humidity percentage between 0 and 100
    surroundingTemperature: (Math.random() * 40 + 20).toFixed(2), // Random surrounding temperature between 20 and 60 degrees Celsius
  };
}

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send initial machine statistics to the client
  socket.emit('machine-stats', generateRandomMachineStats());

  // Update machine statistics every 5 seconds
  const updateInterval = setInterval(() => {
    socket.emit('machine-stats', generateRandomMachineStats());
  }, 500);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    clearInterval(updateInterval); // Stop updating when the user disconnects
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
