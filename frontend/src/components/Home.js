import React from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useData } from './LotData';

export default function Home() {

    const containerStyle = {
        width: '100%',
        height: '95vh'
    };

    const center = {
        lat: 39.981,
        lng: -75.155
    };

    const data = useData();
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
        <div>
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