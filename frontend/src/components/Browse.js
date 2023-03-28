import React, { useState, useEffect } from 'react';
import { useData } from './LotData';
import { calculateDistance } from './utils';
import { FaHeart } from 'react-icons/fa';
import { db, auth } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import Modal from 'react-bootstrap/Modal';

const Browse = () => {
  const data = useData();
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

                <div className="card">
                  <div className="card-body">
                    <p className="card-text">Lot: {data[key].name}</p>
                    <p className="card-text">Spots: {data[key].spots}</p>
                    {latitude && longitude && !isNaN(distance) && (
                      <p className="card-text text-end">{distance.toFixed(2)} mi</p>
                    )}
                    {user && (
                      <button onClick={() => handleFavorite(key)} className="btn btn-outline-danger">
                        <FaHeart />
                      </button>
                    )}
                  </div>
                </div>

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
