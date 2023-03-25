import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useData } from './LotData';

export default function Home() {

    const containerStyle = {
        width: '100%',
        height: '100%',
        position: 'relative',
    };
    const parentStyle = {
        width: "100%",
        height: "100vh",
      };
    const data = useData();
    const [center, setCenter] = useState({ lat: 39.981, lng: -75.155 });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    localStorage.setItem('latitude', position.coords.latitude);
                    localStorage.setItem('longitude', position.coords.longitude);
                },
                error => {
                    console.error(error);
                }
            );
        } else {
            console.error('Geolocation not supported by the browser.');
        }
    }, []);

    const markers = data
        ? Object.keys(data).map((key) => {
            const { lat, lng, spots } = data[key];
            if (lat && lng) {
                return {
                    position: { lat, lng },
                    options: {
                        label: {
                            text: spots.toString(),
                            color: 'white',
                            fontSize: '1rem',
                        },
                    },
                };
            } else {
                // skip this marker if lat && lng not available
                return null;
            }
        }).filter(marker => marker !== null)
        : [];



    return (
        <div style={parentStyle}>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                >
                    {markers.map((marker, index) => (
                        <MarkerF
                            key={index}
                            position={marker.position}
                            options={marker.options}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    );

}