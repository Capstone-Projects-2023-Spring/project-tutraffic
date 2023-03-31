import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LotData } from './LotData';
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

  // add to favorites
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

  return (
    <div className="container mt-4">

      <h2>All Parking Lots data</h2>

      {data ? (
        Object.keys(data).map((key) => {
          const distance = calculateDistance(latitude, longitude, data[key].lat, data[key].lng);

          return (
            <div className="row" key={key}>
              <div className="col mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {data[key].name}
                    </Card.Title>
                    <Card.Text>
                      Spots available: <span className="fw-bold fs-4">{data[key].spots}</span>
                    </Card.Text>
                    {data[key].street && <Card.Text className="card-text text-end" style={{ color: 'red' }}>STREET{data[key].street}</Card.Text>}
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
                  </Card.Body>
                </Card>


                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    This lot has been added to your favorites.
                  </Modal.Body>
                </Modal>

              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}


    </div>
  );
};

export default Browse;
