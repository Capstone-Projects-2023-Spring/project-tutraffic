import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConditionalNavr from "./ConditionalNavr";
import Home from "./Home";
import Browse from "./Browse";
import Login from "./Login";
import Register from "./Register";
import AccountInfo from "./AccountInfo";
import AccountProfile from "./AccountProfile";
import Favorite from "./Favorite";
import ParkingLot from './ParkingLot';

export const App = () => {

  return (
    <Router>
      <div className="App" data-testid="app-component">
        <ConditionalNavr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/info" element={<AccountInfo />} />
          <Route path="/account/profile" element={<AccountProfile />} />
          <Route path="/parkinglot/:key" element={<ParkingLot />} />
        </Routes>
      </div>
    </Router>
  );
};
