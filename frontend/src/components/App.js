import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLoadScript } from '@react-google-maps/api';

import Home from "./Home";
import Map from "./Map";
import Browse from "./Browse";
import Login from "./Login";
import Register from "./Register";
import AccountInfo from "./AccountInfo";
import AccountProfile from "./AccountProfile";
import Favorite from "./Favorite";
import ParkingLot from './ParkingLot';
import Navigation from './Navigation';

const libraries = ['places'];

export const App = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
    libraries,
  });

  if (loadError) return <div>Error loading google maps API</div>;
  if (!isLoaded) return <div>Loading google maps API</div>;

  return (
    <>
      <Router>
        <div className="App" data-testid="app-component" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <div>
            <Navigation />
          </div>
          <div style={{ flexGrow: "1" }}>
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
          </div>
        </div>
      </Router>
    </>
  );
};
