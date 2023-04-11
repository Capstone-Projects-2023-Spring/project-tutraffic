import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLoadScript } from '@react-google-maps/api';

import Navigation from './Navigation';
import AppRoutes from "./Routes";

const libraries = ['places'];

export const App = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
    libraries,
  });

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <>
      <Router>
        <div className="App" data-testid="app-component" style={{ height: "100dvh", display: "flex", flexDirection: "column"}}>
          {!isMobile && <Navigation />}
          <div style={{ flexGrow: "1" }}>
            {loadError && <div>Error loading google maps API</div>}
            {!isLoaded && !loadError && <div>Loading google maps API</div>}
            {isLoaded && <AppRoutes />}
          </div>
          {isMobile && <Navigation />}
        </div>
      </Router>
    </>
  );
};
