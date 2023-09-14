import React, { useState } from 'react'; // Import React
import './App.css';
import Dash from './components/Dash'; // Assuming this path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Dash />
    </div>
  );
}

export default App;
