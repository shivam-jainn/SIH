// socketHandlers.js
const ADMIN_ROOM = "admin_room";
const MANAGER_ROOM = "manager_room";
const COMMON_ROOM = "common_room";

const deviceSockets = {};

const device_meta = {};

function removeDeviceFromRoom(socket, roomName, deviceId) {
  if (device_meta[deviceId] && device_meta[deviceId].rooms.includes(roomName)) {
    socket.leave(roomName);
    console.log(`Device ${deviceId} left ${roomName} room`);
    device_meta[deviceId].rooms = device_meta[deviceId].rooms.filter(
      (room) => room !== roomName
    );
  }
}

  function handleSocketConnection(socket) {
    if (socket.handshake.headers.isdevice == 1) {
      socket.join("dashboard");
      console.log("joined dashboard");
    }

    socket.on("device_register", (deviceId, ...rooms) => {
      // Store the device socket using its ID

      deviceSockets[deviceId] = socket;

      rooms.forEach((room) => {
        socket.join(room);
        console.log(`Device ${deviceId} joined room ${room}`);
      });
    });

    socket.on("iot", (data) => {
      // socket.to("commonroom").emit("iot", data);
      socket.broadcast.emit("iot", data);
      console.log(data);
    });

   
    socket.on("remove_device", (data) => {
      const { roomName, deviceId } = data;
      removeDeviceFromRoom(socket, roomName, deviceId);
    });

    socket.on("message", (data) => {
      console.log(data);
    });
  }


module.exports = { handleSocketConnection };