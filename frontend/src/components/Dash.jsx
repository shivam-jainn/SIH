import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Dash = () => {
    const [machineStats, setMachineStats] = useState({
        temperature: 0,
        vibration: 0,
        soundWaves: 0,
        humidity: 0,
        surroundingTemperature: 0,
    });

    useEffect(() => {
        const socket = io('http://localhost:3001'); // Adjust the URL to match your server

        socket.on('machine-stats', (data) => {
            setMachineStats(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Machine Statistics</h1>
            <ul>
                <li>Temperature: {machineStats.temperature} °C</li>
                <li>Vibration: {machineStats.vibration}</li>
                <li>Sound Waves: {machineStats.soundWaves}</li>
                <li>Humidity: {machineStats.humidity}%</li>
                <li>Surrounding Temperature: {machineStats.surroundingTemperature} °C</li>
            </ul>
        </div>
    );
};

export default Dash;
