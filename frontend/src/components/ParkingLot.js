import { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ParkingLot = () => {
    const { key } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const parkingRef = ref(database, `parking/${key}`);
            const snapshot = await get(parkingRef);
            setData(snapshot.val());
        };

        fetchData();
    }, [key]);

    if (!data) {
        return <div>Loading data...</div>;
    }

    const { name, spots, lat, lng, street, desc, rate } = data;
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const googleMapsEmbed = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}&q=${lat},${lng}`;

    return (

        <Card className="mt-3 mx-5">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Spots: {spots}</Card.Text>
                <Card.Text>coordinate: {lat}, {lng}</Card.Text>
                <Card.Text>Street: {street}</Card.Text>
                <Card.Text>Description: {desc}</Card.Text>
                <Card.Text>Rate: {rate}</Card.Text>
                <Card.Link href={googleMapsLink} target="_blank" rel="noreferrer">
                    View on Google Maps
                </Card.Link>
                <iframe
                    title="Map Preview"
                    width="100%"
                    height="400"
                    src={googleMapsEmbed}
                ></iframe>
            </Card.Body>
        </Card>

    );
};

export default ParkingLot;