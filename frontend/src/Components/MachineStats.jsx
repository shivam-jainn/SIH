import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function MachineStats() {
  const [machineData, setMachineData] = useState({
    temperature: 0,
    vibration: 0,
    soundWaves: 0,
    humidity: 0,
    surroundingTemp: 0,
  });

  useEffect(() => {
    socket.on("machine_data", (data) => {
      setMachineData(data); // Update the machine data
    });
  }, [socket]);

  return (
    <div className="App">
      <h1>Machine Statistics:</h1>
      <p>Temperature: {machineData.temperature} °C</p>
      <p>Vibration: {machineData.vibration} Hz</p>
      <p>Sound Waves: {machineData.soundWaves} dB</p>
      <p>Humidity: {machineData.humidity} %</p>
      <p>Surrounding Temperature: {machineData.surroundingTemp} °C</p>
    </div>
  );
}

export default MachineStats;
