import { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap';
import addNotification from 'react-push-notification';

const ParkingLot = () => {
    const navigate = useNavigate();
    const { key } = useParams();
    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const parkingRef = ref(database, `parking/${key}`);
        const listener = onValue(parkingRef, (snapshot) => {
            setData(snapshot.val());
        });

        return () => {
            // detach the listener when the component unmounts
            listener();
        };
    }, [key]);

    useEffect(() => {
        // check if spots are less than 5 and showModal is true
        if (data && showModal && data.spots < 5) {
            // trigger notification
            addNotification({
                title: 'TuTraffic',
                subtitle: 'low spots alert',
                message: 'Less than 5 spots remaining',
                native: true
            });
        }
    }, [data, showModal]);

    if (!data) {
        return <div>Loading data...</div>;
    }

    const { name, spots, lat, lng, street, desc, rate } = data;
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const googleMapsEmbed = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}&q=${lat},${lng}`;

    const handleParkClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleNavigateClick = () => {
        window.open(googleMapsLink, '_blank');
    };

    const modalStyle = {
        color: 'white',
        height: '75vh',
        fontSize: '18rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: spots < 5 ? 'red' : 'green',
        flexDirection: 'column',
    };

    return (
        <>
            <div className="d-flex justify-content-end">
                <Button variant="outline-dark mt-3 mx-5" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
            <Card className="mt-3 mx-5 ">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Spots: {spots}</Card.Text>
                    <Card.Text>coordinate: {lat}, {lng}</Card.Text>
                    {street && <Card.Text>Street Parking</Card.Text>}
                    <Card.Text>Description: {desc}</Card.Text>
                    <Card.Text>Rate: {rate}</Card.Text>
                    <Button variant="primary" onClick={handleParkClick}>
                        Park Here
                    </Button>
                    <iframe
                        title="Map Preview"
                        width="100%"
                        src={googleMapsEmbed}
                    ></iframe>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Spots Remaining</Modal.Title>
                </Modal.Header>
                <Modal.Body style={modalStyle}>
                    {spots}
                    <Button variant="warning" onClick={handleNavigateClick}>
                        Navigate
                    </Button>
                </Modal.Body>
            </Modal>

        </>
    );
};

export default ParkingLot;