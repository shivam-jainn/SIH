import React, { useState } from "react"; // Import React
import "./App.css";
import ClientMain from "./components/ClientView/ClientMain";
import Shell from "./components/ClientView/Shell"; // Assuming this path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" px-2 md:p-16 ">
      <ClientMain />
    </div>
  );
}

export default App;
