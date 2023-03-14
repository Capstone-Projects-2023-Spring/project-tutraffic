import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100vh',
    height: '100vh'
};

const center = {
    lat: 39.981,
    lng: -75.155
};


export default function Home() {

    return (
        <LoadScript
            googleMapsApiKey="EMPTY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );

}