import React from "react";
import Navr from "./Navr";
import Home from "./Home";
import Data from "./Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
}


