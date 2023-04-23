import React, { useEffect, useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaLocationArrow} from 'react-icons/fa';
import { auth } from '../firebase';



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
  const [center, setCenter] = useState({ lat: latitude, lng: longitude}); // default center
  
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

  const mapContainerStyle = {
    width: '100vw',
    height: 'calc(100% - 56px)',
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
  
  // authenticate user and get lot and car type
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

const { userLotType, userCarType } = UserLotData(currentUser?.uid);


  const markers = data ? Object.keys(data)
  .filter((key) => (userLotType !== null ? data[key].street === userLotType : true)) //added filter
  .filter((key) => (userCarType !== null ? data[key].maxsize=== userCarType : true)) //added filter
  .map((key) => {
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
    <div style={{containerStyle}}>
      <div className="row justify-content-left" style={{ justifyContent: isMobile ? 'center' : '' }}>          <div className="col-lg-4 col-12 justify-content-left justify-content-sm-center m-lg-4 m-2" style={{ 
              position: "absolute",
              zIndex: '5',
              border: '1px solid black',
              borderRadius: '10px',
              padding: "15px",
              backgroundColor: "rgba(128, 128, 128, .3)"
            }}
            >
            <Form>
              <div className="row justify-content-center">
                <div className="col-lg-9 col-7 justify-content-center"> 
                  <Autocomplete
                    onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                    onPlaceChanged={handlePlaceChanged}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter an address"
                      value={address}
                      onChange={handleInputChange}
                      style={{ height: "10%", marginBottom: "3%", width: "100%"}}
                    />
                  </Autocomplete>
                </div>

                <div className="col-lg-3 col-3 justify-content-center mb-3" style={{height: "10%"}}>
                  <Button variant="warning" onClick={handleSearch} >Search</Button>
                </div>
                
                <div className="col-lg-12 col-2 justify-content-center">
                  <Button variant="outline-secondary text-black justify-content-center" onClick={handleGetCurrentLocation}>
                    {isMobile ? (<FaLocationArrow/>) 
                    : (
                        <>
                        <FaLocationArrow style={{ marginRight: "0.5rem" }} />
                        Use Current Location
                        </>
                    )}
                  </Button>
                </div>
              </div>  
            </Form>
          </div>
        </div>
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
    