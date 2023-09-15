// frontend/src/App.js
import React from 'react';
import MachineStats from './Components/MachineStats';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="App">
      <h1>Machine Monitoring Dashboard</h1>
      <MachineStats />
      <Chat />
    </div>
  );
}

export default App;
