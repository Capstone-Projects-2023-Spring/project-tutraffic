import React, { useState, useEffect } from 'react'

import { GoogleMap, LoadScript, MarkerF, useLoadScript } from '@react-google-maps/api';
import { LotData } from './LotData';
import blueDot from '../images/bluecircle.png';
import { useNavigate } from 'react-router-dom';
import streetIcon from '../images/streetParking.png';
import lotIcon from '../images/lotParking.png';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styles from "./Home.css"

const Home = () => {
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

    const data = LotData();
    const [center, setCenter] = useState({ lat: 39.981, lng: -75.155 });
    const [selected, setSelected] = useState(null)

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

    const PlacesAutocomplete = ({ setSelected }) => {
        const {
            ready,
            value,
            setValue,
            suggestions: {status, data},
            clearSuggestions,
        } = usePlacesAutocomplete({
            requestOptions: {
                types: ['address'],
                componentRestrictions: {country: "us"}
            },
            debounce: 300,
        });

        const handleSelect = async (address) => {
            setValue(address, false);
            clearSuggestions();

            try {
                const results = await getGeocode({address});
                const { lat, lng } = await getLatLng(results[0]);
                setSelected({ lat, lng });
                setCenter({ lat, lng });
            } catch (error) {
                console.log("Error: No such place", error);
            }
        };
        return (
            <Combobox onSelect={handleSelect}>
                <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disabled={!ready} className="combobox-input" placeholder="Search an Address"/>
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        );
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
    libraries={["places"]}
    >
        <div className="places-container">
            <PlacesAutocomplete setSelected={setSelected} />
        </div>
         <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
                options={options}
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
                        onClick={() => handleMarkerClick(Object.keys(data)[index])}
                        options={marker.options}
                    />
                ))}
                {selected && <MarkerF position={selected} />}
            </GoogleMap>
    </LoadScript>
    );
};

export default Home;

