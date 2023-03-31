import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Browse from "./Browse";
import Login from "./Login";
import Register from "./Register";
import AccountInfo from "./AccountInfo";
import Favorite from "./Favorite";
import ParkingLot from './ParkingLot';
import Navigation from './Navigation';

export const App = () => {

  return (
    <>
      <Router>
        <div className="App" data-testid="app-component" style={{ height: "100vh", display: "flex", "flex-direction": "column" }}>
          <div>
            <Navigation />
          </div>
          <div style={{ "flex-grow": "1" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Register />} />
              <Route path="/account/info" element={<AccountInfo />} />
              <Route path="/parkinglot/:key" element={<ParkingLot />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};
