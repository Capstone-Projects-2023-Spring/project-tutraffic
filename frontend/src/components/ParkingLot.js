import { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button, Modal, Badge } from 'react-bootstrap';
import addNotification from 'react-push-notification';
import { FaMapMarkerAlt, FaCar, FaDollarSign } from 'react-icons/fa';

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

    const { name, spots, lat, lng, street, desc, rate, Captured } = data;
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
                <Button variant="outline-dark" className="mt-3 mx-5" onClick={() => navigate(-1)}>Back</Button>
            </div>
            <Card className="my-3 mx-auto" style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title className="mb-4">{name}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <FaMapMarkerAlt className="mr-2 text-primary" />
                            <span className="text-muted">{lat}, {lng}</span>
                        </div>
                        <div>
                            <FaCar className="mr-2 text-primary" />
                            <span className="text-muted">{spots} spots</span>
                        </div>
                    </div>
                    {street && <Badge pill variant="info" className="my-2">Street Parking</Badge>}
                    <Card.Text className="my-4">{desc}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <FaDollarSign className="mr-2 text-primary" />
                            <span>{rate}</span>
                        </div>
                        <Button variant="success" className="ml-3" onClick={handleParkClick}>Park Here</Button>
                    </div>
                    <Card.Text className="my-4 text-muted">Last Update: {Captured}</Card.Text>
                    <div className="my-4">
                        <iframe title="Map Preview" width="100%" height="200" src={googleMapsEmbed}></iframe>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Spots Remaining</Modal.Title>
                </Modal.Header>
                <Modal.Body style={modalStyle}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className={`d-flex justify-content-center align-items-center rounded-circle ${spots < 5 ? 'bg-danger' : 'bg-success'}`} style={{ height: '20rem', width: '20rem', fontSize: '10rem', fontWeight: 'bold' }}>
                            {spots}
                        </div>
                        <Button variant="primary" className="my-4" onClick={handleNavigateClick}>Navigate</Button>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
};

export default ParkingLot;