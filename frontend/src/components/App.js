import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLoadScript } from '@react-google-maps/api';

import Navigation from './Navigation';
import AppRoutes from "./Routes";

const libraries = ['places'];

export const App = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
    libraries,
  });

  return (
    <>
      <Router>
        <div className="App" data-testid="app-component" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <div>
            <Navigation />
          </div>
          <div style={{ flexGrow: "1" }}>
            {loadError && <div>Error loading google maps API</div>}
            {!isLoaded && !loadError && <div>Loading google maps API</div>}
            {isLoaded && <AppRoutes />}
          </div>
        </div>
      </Router>
    </>
  );
};
