import React from "react";
import ConditionalNavr from "./ConditionalNavr";
import Home from "./Home";
import Data from "./Data";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <ConditionalNavr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};
