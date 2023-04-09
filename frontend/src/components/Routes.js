import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Map from "./Map";
import Browse from "./Browse";
import Login from "./Login";
import Register from "./Register";
import AccountInfo from "./AccountInfo";
import AccountProfile from "./AccountProfile";
import Favorite from "./Favorite";
import ParkingLot from './ParkingLot';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/account/login" element={<Login />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/account/info" element={<AccountInfo />} />
      <Route path="/account/profile" element={<AccountProfile />} />
      <Route path="/parkinglot/:key" element={<ParkingLot />} />
    </Routes>
  );
}
