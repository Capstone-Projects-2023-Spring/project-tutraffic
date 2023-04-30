import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

const Favorite = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState(null);

    /**
     * Navigates to the parking lot page with the given key when the marker is clicked.
     * @param {string} key - The unique identifier of the parking lot.
     */
    const handleMarkerClick = (key) => {
        navigate(`/parkinglot/${key}`);
    };

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

    useEffect(() => {
        const fetchFavorites = async () => {
            if (user) {
                const q = query(collection(db, `users/${user.uid}/favorites`));
                const querySnapshot = await getDocs(q);
                const favoriteList = querySnapshot.docs.map((doc) => doc.data().lotId);
                setFavorites(favoriteList);
            }
        };
        fetchFavorites();
    }, [user]);

    /**
     * Deletes the favorite with the specified id from the user's favorites and the Firestore database.
     * @param {string} id - The ID of the favorite to delete.
     */
    const handleDelete = async (id) => {
        const newFavorites = favorites.filter((fav) => fav !== id);
        setFavorites(newFavorites);
        await deleteDoc(doc(db, `users/${user.uid}/favorites/${id}`));
    };

    return (
        <div className="container mt-4">
            <h2>Favorite Parking Lots</h2>

            {favorites.length > 0 ? (
                favorites.map((id) => {
                    return (
                        <div className="row" key={id}>
                            <div className="col mb-4">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Card.Title className="mb-0">{id}</Card.Title>
                                            <Button variant="outline-danger" onClick={() => handleDelete(id)}>
                                                Remove from favorite
                                            </Button>
                                        </div>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="info" onClick={() => handleMarkerClick(id)}>
                                                View Detail
                                            </Button>
                                        </div>
                                    </Card.Body>

                                </Card>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>You haven't added any favorites yet.</p>
            )}
        </div >
    );
};

export default Favorite;
