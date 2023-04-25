import React, { useEffect, useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';

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

  const desktopContainerStyle = {
    width: '100vw',
    height: 'calc(100% - 104px)',
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
    
  const [user, setUser] = useState(null);
  const [carSize, setCarSize] = useState(''); 
  const [lotType, setLotType] = useState('Parking'); 
  const [priceType, setPriceType] = useState('Pricing'); 
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Clean up the listener on component unmount
    return () => {
      unsubscribe();
    };
  }, []);
  
  // This changes the data in firestore 
  useEffect(() => { 
    if (user && (carSize !== '' || lotType !== 'Parking' || priceType !== 'Pricing')) {
      const userData = {
        CarSize: carSize,
        lotType: lotType,
        priceType: priceType
      };
      setDoc(doc(db, "users", user.uid), userData);
    }
  }, [carSize, lotType, priceType, user]);

  // fetch the current user's car size and lot type 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setCarSize(userData.CarSize || 'Small');
          setLotType(userData.lotType || 'All Parking');
          setPriceType(userData.priceType || 'Any Pricing');
        }
      } catch (error) {
        console.log("Error fetching user data: ", error);
      }
    };
 
    if (user) {
      fetchUserData();
    }
  }, [user]);
  
  return (
    <div style={{containerStyle}}>
      {isMobile ? (
        <>
          <Navbar style={{height:"48px"}}>
            <Container className="justify-content-center">
              <Form style={{display:"flex", gap:"10px", marginRight:"10px"}}>
                <Autocomplete onLoad={(autocomplete) => setAutocomplete(autocomplete)} onPlaceChanged={handlePlaceChanged}>
                  <Form.Control
                    type="text"
                    placeholder="Enter an address, city, or ZIP code"
                    value={address}
                    onChange={handleInputChange}
                    style={{height: "40px", width:"275px"}}
                  />
                </Autocomplete>
                <Button variant="primary" onClick={handleSearch}>Search</Button>
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
          <Navbar style={{height:"48px"}}>
            <Container>
              <Form style={{display:"flex", gap:"10px", marginRight:"10px"}}>
                <Autocomplete onLoad={(autocomplete) => setAutocomplete(autocomplete)} onPlaceChanged={handlePlaceChanged}>
                  <Form.Control
                    type="text"
                    placeholder="Enter an address, city, or ZIP code"
                    value={address}
                    onChange={handleInputChange}
                    style={{height: "40px", width:"300px"}}
                  />
                </Autocomplete>
                <Button variant="primary" onClick={handleSearch}>Search</Button>
              </Form>
              <Navbar.Collapse className="justify-content-end" style={{display:"flex", gap:"10px"}}>
                <DropdownButton className="filter-btn" variant="light" id="dropdown-basic-button" title={lotType}>
                  <Dropdown.Item onClick={() => setLotType("Parking Lot")}>Parking Lot</Dropdown.Item>
                  <Dropdown.Item onClick={() => setLotType("Street Parking")}>Street Parking</Dropdown.Item>
                  <Dropdown.Item onClick={() => setLotType("All Parking")}>All Parking</Dropdown.Item>
                </DropdownButton>
                <DropdownButton style={{}} className="filter-btn" variant="light" id="dropdown-basic-button"  title={priceType}>
                  <Dropdown.Item onClick={() => setPriceType("Free")}>Free</Dropdown.Item>
                  <Dropdown.Item onClick={() => setPriceType("Paid")}>Paid</Dropdown.Item>
                  <Dropdown.Item onClick={() => setPriceType("Any Pricing")}>Any Pricing</Dropdown.Item>
                </DropdownButton>
                <Button variant="secondary" onClick={() => window.location.reload(false)}>Apply</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
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
        </>
      )}
    </div>
  );
};
    
export default Map;
    