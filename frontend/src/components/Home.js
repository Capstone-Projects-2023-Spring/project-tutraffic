import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useData } from './LotData';
import blueDot from '../images/bluecircle.png';

export default function Home() {

    const containerStyle = {
        width: '100%',
        height: '95vh',
        position: 'relative',
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
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
            >
                <MarkerF
                    position={center}
                    options={{
                        icon: {
                            url: blueDot,
                        },
                    }}
                />
                {markers.map((marker, index) => (
                    <MarkerF
                        key={index}
                        position={marker.position}
                        options={marker.options}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );

}