import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Itinerary from "./pages/dashboard/itinerary";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="itinerary" element={<Itinerary />} />
    </Routes>
  );
}

export default App;
