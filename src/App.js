import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Next from "./Next";
import Billing from "./Billing";
import Completed from "./Completed";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </Router>
  );
}
