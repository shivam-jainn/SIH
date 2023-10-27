import React, { useEffect, useState } from 'react';

const Dash = () => {
    const [machineStats, setMachineStats] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); // Assuming the JSON file is in your public directory
                const data = await response.json();
                setMachineStats(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data initially
        fetchData();

        // Set up an interval to refresh data every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % machineStats.length);
            fetchData(); // Fetch new data on each interval
        }, 3000);

        return () => {
            clearInterval(interval); // Clear the interval when the component unmounts
        };
    }, []);

    return (
        <div>
            <h1>Machine Statistics</h1>
            {machineStats.length > 0 && (
                <ul>
                    <li>Machine ID: {machineStats[currentIndex].Machine_ID}</li>
                    <li>Timestamp: {machineStats[currentIndex].Timestamp}</li>
                    <li>Temperature: {machineStats[currentIndex].Machine_Temperature_C} °C</li>
                    <li>Sound Waves: {machineStats[currentIndex].Soundwave_dB}</li>
                    <li>Vibration: {machineStats[currentIndex]['Vibration_mm/s^2']}</li>
                    <li>Environment Temperature: {machineStats[currentIndex].Environment_Temperature_C} °C</li>
                    <li>Humidity: {machineStats[currentIndex]['Humidity_%']}%</li>
                </ul>
            )}
        </div>
    );
};

export default Dash;
