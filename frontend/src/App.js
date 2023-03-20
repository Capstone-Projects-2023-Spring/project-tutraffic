import React, {useState} from "react";
import Home from "./Home";
import Data from "./Data";
import Login from "./components/login";
import Register from './components/register';
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import "./App.css"

export default function App() {
  const loggedIn = true
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
}


