import React, { useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaLocationArrow, FaRegIdBadge } from 'react-icons/fa';



import { LotData } from './LotData';

const Map = () => {
  const streetIcon = `${process.env.PUBLIC_URL}/images/streetParking.png`;
  const lotIcon = `${process.env.PUBLIC_URL}/images/lotParking.png`;
  
  // Retrieve the user's latitude and longitude from local storage
  const latitude = parseFloat(localStorage.getItem('latitude'));
  const longitude = parseFloat(localStorage.getItem('longitude'));
  
  const [address, setAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  
    // set the map center - but changable
  const [center, setCenter] = useState({ lat: latitude, lng: longitude}); // default center
  
  const navigate = useNavigate();
  const handleMarkerClick = (key) => {
    navigate(`/parkinglot/${key}`);
  };

  const containerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  const mapContainerStyle = {
    width: '100%',
    height: 'calc(100% - 56px)',
    position: 'absolute',
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
  
  const markers = data ? Object.keys(data).map((key) => {
    const { lat, lng, spots, street } = data[key];
    if (lat && lng) {
      return {
        position: { lat, lng },
        options: {
          label: {
            text: spots.toString(),
            color: 'white',
            fontSize: '1.2rem',
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
  }).filter(marker => marker !== null) : [];
  
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

                setCenter({
                  lat,
                  lng,
                })
                // Save to localStorage
                localStorage.setItem('latitude', lat);
                localStorage.setItem('longitude', lng);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
  
  return (
    <div className="d-flex flex-column align-items-center" style={{containerStyle}}>
        <Form style={{ 
        position: 'absolute',
        bottom: "5%",
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '5',
        border: '1px solid black',
        borderRadius: '10px',
        padding: "20px",
        backgroundColor: "rgba(128, 128, 128, .3)"
      }}>
          <div className="d-flex justify-content-center row">
            <div className="col-sm-9 justify-content-center" style={{
            padding: 0,
            paddingRight: "10px"
          }}>
              <Autocomplete
                onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                onPlaceChanged={handlePlaceChanged}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter an address"
                  value={address}
                  onChange={handleInputChange}
                  style={{ height: "3rem", marginBottom: "1rem", width: "100%"}}
                />
              </Autocomplete>
            </div>
            <div className="d-flex justify-content-center mb-3 col-sm-3">
              <Button variant="warning" onClick={handleSearch}>Search</Button>
            </div>
            </div>
            <div className="d-flex justify-content-center row">
              <Button variant="outline-secondary text-black" onClick={handleGetCurrentLocation} >
                <FaLocationArrow style={{ marginRight: "0.5rem" }} /> Use Current Location
              </Button>
            </div>
          
        </Form>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
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
    </div>
  );
};
    
    export default Map;
    