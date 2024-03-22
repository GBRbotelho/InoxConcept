import React, { useEffect } from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./containers/@Index";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}

export default App;
