import React from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Navr from "./Navr";
import Data from "./Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const containerStyle = {
    width: '100%',
    height: '95vh'
};

const center = {
    lat: 39.981,
    lng: -75.155
};

const markers = [
    {
        position: { lat: 39.9821509161337, lng: -75.15208878141173 },
        options: {
            label: {
                text: '0',
                color: 'white',
                fontSize: '1rem',
            }
        }
    },
    {
        position: { lat: 39.98019995995171, lng: -75.15170180245298 },
        options: {
            label: {
                text: '-1',
                color: 'white',
                fontSize: '1rem',
            }
        }
    }
];

export default function Home() {

    return (
            <div>
                <Navr />
                <LoadScript
                    googleMapsApiKey="API_KEY_HERE"
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