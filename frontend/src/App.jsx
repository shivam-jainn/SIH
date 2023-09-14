import React, { useState } from "react"; // Import React
import "./App.css";
import ClientMain from "./components/ClientView/ClientMain";
import Shell from "./components/ClientView/Shell"; // Assuming this path is correct

function App() {
  return (
    <div className="p-16 ">
      <ClientMain />
    </div>
  );
}

export default App;
