import React, { useState } from "react"; // Import React
import "./App.css";
import ClientMain from "./components/ClientView/ClientMain";
// import Shell from "./components/ClientView/Shell"; // Assuming this path is correct
import AdminMain from "./components/AdminView/AdminMain";
import IOTMain from "./components/IOTView/IOTMain";
import NavBar from "./components/Navbar/Navbar";
// import IOTinventory from "./components/IOTView/IOTinventory";

import { Route, Routes } from "react-router-dom";
import IOTedit from "./components/IOTView/IOTedit";
import IOTinventory from "./components/IOTView/IOTinventory";
import LandingPage from "./components/LandingView/LandingPage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/client" element={<ClientMain />} />
      <Route path="/iot">
        <Route index element={<IOTMain />} />
        <Route path="iotEdit" element={<IOTedit />} />
        <Route path="iotInventory" element={<IOTinventory />} />
      </Route>
      <Route path="/admin" element={<AdminMain />} />
      <Route path="/auth">
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
