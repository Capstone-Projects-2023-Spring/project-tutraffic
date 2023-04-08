import React from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

import { LotData } from './LotData';

const Map = () => {
    const streetIcon = `${process.env.PUBLIC_URL}/images/streetParking.png`;
    const lotIcon = `${process.env.PUBLIC_URL}/images/lotParking.png`;

    // Retrieve the user's latitude and longitude from local storage
    const latitude = parseFloat(localStorage.getItem('latitude'));
    const longitude = parseFloat(localStorage.getItem('longitude'));

    const navigate = useNavigate();
    const handleMarkerClick = (key) => {
        navigate(`/parkinglot/${key}`);
    };

    const containerStyle = {
        width: '100%',
        height: '100%',
        position: 'relative',
    };

    const options = {
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    { visibility: "off" }
                ]
            }
        ],
        mapTypeControl: false,
        streetViewControl: false
    };

    // Retrieve the parking lot data
    const data = LotData();
    
    // set the map center
    const center = {
        lat: latitude,
        lng: longitude,
    };


    const markers = data
        ? Object.keys(data).map((key) => {
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
        }).filter(marker => marker !== null)
        : [];



    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
                options={options}
            >
                <MarkerF
                    position={center}
                />
                {markers.map((marker, index) => (
                    <MarkerF
                        key={index}
                        position={marker.position}
                        onClick={() => handleMarkerClick(Object.keys(data)[index])}
                        options={marker.options}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );

};

export default Map;