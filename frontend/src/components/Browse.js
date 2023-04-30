import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LotData } from './LotData';
import { UserLotData } from './UserLotData';
import { calculateDistance } from './utils';
import { FaHeart } from 'react-icons/fa';
import { db, auth } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { Card, Modal, Button } from 'react-bootstrap';

const Browse = () => {
  const navigate = useNavigate();
  const handleMarkerClick = (key) => {
    navigate(`/parkinglot/${key}`);
  };

  const data = LotData();
  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  /**
   * Adds a new favorite to the user's list of favorites and updates the user's favorites collection in Firestore.
   * @param {string} id - The ID of the favorite to add
   */
  const handleFavorite = async (id) => {
    setFavorites([...favorites, id]);
    await setDoc(doc(db, "users", user.uid, "favorites", id), {
      lotId: id
    });
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const { userLotType, userCarType, userPriceType } = UserLotData(user?.uid);
  const renderData = () => {
    if (!data) {
      return <p>Loading...</p>;
    }

    const sortedData = Object.keys(data)
      .map((key) => {
        const distance = calculateDistance(latitude, longitude, data[key].lat, data[key].lng);
        return { key, distance, ...data[key] };
      })
      .filter((item) => (!isNaN(item.distance)
        && (userLotType === 'all' || userLotType === item.street)
        && (item.maxsize >= userCarType)
        && (item.free || userPriceType !== true)
      ))
      .sort((a, b) => a.distance - b.distance);

    return sortedData.map(({ key, name, spots, street, distance, Captured }) => (
      <div className="row" key={key}>
        <div className="col mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Spots available: <span className="fw-bold fs-4">{spots}</span>
              </Card.Text>
              {street && (
                <Card.Text className="card-text text-end" style={{ color: 'red' }}>
                  STREET{street}
                </Card.Text>
              )}
              {latitude && longitude && !isNaN(distance) && (
                <Card.Text className="text-end fw-bold">{distance.toFixed(2)} mi</Card.Text>
              )}
              {user && (
                <div className="d-flex justify-content-end">
                  <Button onClick={() => handleFavorite(key)} variant="outline-danger">
                    <FaHeart /> Add to Favorite
                  </Button>
                </div>
              )}
              <div className="mt-2 d-flex justify-content-end">
                <Button onClick={() => handleMarkerClick(key)}>View Detail</Button>
              </div>
              <Card.Text className='text-muted'>Last Update: {Captured}</Card.Text>
            </Card.Body>
          </Card>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>This lot has been added to your favorites.</Modal.Body>
          </Modal>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-4">
      <h2>Parking Locations</h2>
      {latitude && longitude && (
        <p className="text-muted">Data displayed in order of distance</p>
      )}
      {renderData()}
    </div>
  );
};

export default Browse;