import React from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';

import { LotData } from './LotData';

const Map = () => {
  const streetIcon = `${process.env.PUBLIC_URL}/images/streetParking.png`;
  const lotIcon = `${process.env.PUBLIC_URL}/images/lotParking.png`;

  // Retrieve the user's latitude and longitude from local storage
  const latitude = parseFloat(localStorage.getItem('latitude'));
  const longitude = parseFloat(localStorage.getItem('longitude'));

  const [address, setAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);

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

  // set the map center
  const center = {
    lat: latitude,
    lng: longitude,
  };

  const markers = data ? Object.keys(data).map((key) => {
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
  }).filter(marker => marker !== null) : [];

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

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={options}
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
  );
};

export default Map;
