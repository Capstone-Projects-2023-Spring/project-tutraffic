import React, { useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaParking, FaLocationArrow } from 'react-icons/fa';

const libraries = ["places"];

const Home = () => {
    const [address, setAddress] = useState("");
    const [autocomplete, setAutocomplete] = useState(null);
    const navigate = useNavigate();

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
        libraries
    });

    if (loadError) return "Error loading googleMapsApi";
    if (!isLoaded) return "Loading";

    const handleSearch = () => {
        // Use the Geocoder API to get the coordinates of the address
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === "OK") {
                const lat = results[0].geometry.location.lat();
                const lng = results[0].geometry.location.lng();

                // Save to localStorage
                localStorage.setItem('latitude', lat);
                localStorage.setItem('longitude', lng);

                navigate('/map');
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

                // Save to localStorage
                localStorage.setItem('latitude', lat);
                localStorage.setItem('longitude', lng);

                // Navigate to /map
                navigate('/map');
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center mt-5" >
                <FaParking size={40} />
                <h1>Find Parking Now</h1>
                <p>at Temple University</p>
                <Form>
                    <Autocomplete
                        onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                        onPlaceChanged={handlePlaceChanged}
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter an address"
                            value={address}
                            onChange={handleInputChange}
                            style={{ width: '20rem', height: '3rem' }}
                        />
                    </Autocomplete>
                    <div className="d-flex justify-content-center mt-2">
                        <Button variant="warning" onClick={handleSearch}>Search</Button>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <Button variant="outline-secondary" onClick={handleGetCurrentLocation}><FaLocationArrow /> Use Current Location</Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Home;
