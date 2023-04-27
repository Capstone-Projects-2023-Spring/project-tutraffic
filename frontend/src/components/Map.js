import React, { useEffect, useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import { auth } from '../firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { IoSearch } from 'react-icons/io5';
import { IoLocate } from 'react-icons/io5';

import { LotData } from './LotData';
import { UserLotData } from './UserLotData';

const Map = () => {
  const streetIcon = `${process.env.PUBLIC_URL}/images/streetParking.png`;
  const lotIcon = `${process.env.PUBLIC_URL}/images/lotParking.png`;

  // Retrieve the user's latitude and longitude from local storage
  let latitude = parseFloat(localStorage.getItem('latitude'));
  let longitude = parseFloat(localStorage.getItem('longitude'));
  if (isNaN(latitude) || isNaN(longitude)) {
    latitude = 39.9819691;
    longitude = -75.1532035;
  };

  const [address, setAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [windowDimension, setWindowDimension] = useState(null);

  // set the map center - but changable
  const [center, setCenter] = useState({ lat: latitude, lng: longitude }); // default center

  const navigate = useNavigate();
  const handleMarkerClick = (key) => {
    navigate(`/parkinglot/${key}`);
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden'
  };

  const desktopContainerStyle = {
    width: '100vw',
    height: 'calc(100% - 55px)',
    position: 'absolute',
    overflow: 'hidden'
  };

  const mobileContainerStyle = {
    width: '100vw',
    height: 'calc(100% - 125px)',
    position: 'absolute',
    overflow: 'hidden'
  };

  const options = {
    styles: [{
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [{ visibility: "off" }]
    }],
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  };

  // Retrieve the parking lot data
  const data = LotData();

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

  // Authenticate user
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const { userLotType, userCarType, userPriceType } = UserLotData(currentUser?.uid);
  const markers = data ? Object.keys(data)
    .filter((key) => (userLotType !== null ? data[key].street === userLotType : true))
    .filter((key) => (userCarType !== null ? data[key].maxsize >= userCarType : true))
    .filter((key) => (userPriceType !== null ? data[key].free === userPriceType : true))
    .map((key) => {
      const { lat, lng, spots, street } = data[key];
      if (lat && lng) {
        return {
          position: { lat, lng },
          options: {
            label: {
              text: spots.toString(),
              color: "white",
              fontSize: "1.2rem",
            },
            icon: {
              url: street ? streetIcon : lotIcon,
            },
          },
        };
      } else {
        // skip this marker if lat && lng not available
        return null;
      }
    }).filter((marker) => marker !== null) : [];

  const handleSearch = () => {
    // Use the Geocoder API to get the coordinates of the address
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK") {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        // center map at new location
        setCenter({
          lat,
          lng,
        });

        // Save to localStorage
        localStorage.setItem('latitude', lat);
        localStorage.setItem('longitude', lng);
      }
    });
  };

  const handlePlaceChanged = () => {
    const newAddress = autocomplete.getPlace().formatted_address;
    setAddress(newAddress);
  }

  const handleInputChange = (event) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setCenter({ lat, lng, })
        localStorage.setItem('latitude', lat);
        localStorage.setItem('longitude', lng);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div style={{ containerStyle }}>
      {isMobile ? (
        <>
          <Navbar style={{ height: "48px" }}>
            <Container className="justify-content-center">
              <Form style={{ display: "flex", gap: "4px" }}>
                <Autocomplete onLoad={(autocomplete) => setAutocomplete(autocomplete)} onPlaceChanged={handlePlaceChanged}>
                  <Form.Control
                    type="text"
                    placeholder="Enter an address, city, or ZIP code"
                    value={address}
                    onChange={handleInputChange}
                    style={{ height: "40px", width: "275px" }}
                  />
                </Autocomplete>
                <div className="mobile-btn-ctn" style={{ display: "flex", gap: "4px" }}>
                  <Button className="mobile-search-btns" variant="light" title="Search" onClick={handleSearch}><IoSearch size={22} /></Button>
                  <Button className="mobile-search-btns" variant="light" title="Show your location" onClick={handleGetCurrentLocation}><IoLocate size={23} /></Button>
                </div>
              </Form>
            </Container>
          </Navbar>

          <GoogleMap
            mapContainerStyle={mobileContainerStyle}
            center={center}
            zoom={17}
            options={options}
            style={{
              zIndex: '0',
            }}
          >
            <MarkerF position={center} />
            {markers.map((marker, index) => (
              <MarkerF
                key={index}
                position={marker.position}
                onClick={() => handleMarkerClick(Object.keys(data)[index])}
                options={marker.options}
              />
            ))}
          </GoogleMap>
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="search-container" >
              <Form style={{ display: "flex", gap: "10px", marginRight: "10px" }}>
                <Autocomplete onLoad={(autocomplete) => setAutocomplete(autocomplete)} onPlaceChanged={handlePlaceChanged}>
                  <Form.Control
                    type="text"
                    placeholder="Enter an address, city, or ZIP code"
                    value={address}
                    onChange={handleInputChange}
                    style={{ height: "40px", width: "350px", borderRadius: "0.75rem" }}
                  />
                </Autocomplete>
                <Button className="search-btn" variant="light" title="Search" onClick={handleSearch}><IoSearch size={22} /></Button>
                <Button className="current-location-btn" variant="light" title="Show your location" onClick={handleGetCurrentLocation}><IoLocate size={25} /></Button>
              </Form>
            </div>
          </div>

          <GoogleMap
            mapContainerStyle={desktopContainerStyle}
            center={center}
            zoom={17}
            options={options}
            style={{
              zIndex: '0',
            }}
          >
            <MarkerF position={center} />
            {markers.map((marker, index) => (
              <MarkerF
                key={index}
                position={marker.position}
                onClick={() => handleMarkerClick(Object.keys(data)[index])}
                options={marker.options}
              />
            ))}
          </GoogleMap>
          <div style={{ position: "absolute", bottom: "120px", right: "10px", backgroundColor: "white", padding: "10px", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
              <img src={streetIcon} alt="Street Parking Icon" style={{ width: "30px", marginRight: "5px" }} />
              <div>Street Parking</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={lotIcon} alt="Off-Street Parking Icon" style={{ width: "30px", marginRight: "5px" }} />
              <div>Off-Street Parking</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
