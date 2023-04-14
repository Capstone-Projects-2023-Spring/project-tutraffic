import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaParking, FaLocationArrow } from 'react-icons/fa';

const Home = () => {
    const [address, setAddress] = useState("");
    const [autocomplete, setAutocomplete] = useState(null);
    const navigate = useNavigate();

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
            <div className="d-flex flex-column align-items-center" style={{ background: "#f5f5f5", padding: "2rem" }}>
                <div className="mt-5 mb-5">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} height="60" alt="TuTraffic Logo" />
                </div>
                <div className="text-center">
                    <h1 className="mb-3" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Find Parking Now</h1>
                    <p className="mb-5" style={{ fontSize: "1.2rem" }}>at Temple University</p>
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
                                style={{ height: "3rem", marginBottom: "1rem" }}
                            />
                        </Autocomplete>
                        <div className="d-flex justify-content-center mb-3">
                            <Button variant="warning" onClick={handleSearch}>Search</Button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="outline-secondary" onClick={handleGetCurrentLocation} >
                                <FaLocationArrow style={{ marginRight: "0.5rem" }} /> Use Current Location
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="mt-4">
                    <FaParking size={60} style={{ color: "#9E1B34" }} />
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p>...</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Contact Us</h2>
                        <p>Email: info@tutraffic.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
