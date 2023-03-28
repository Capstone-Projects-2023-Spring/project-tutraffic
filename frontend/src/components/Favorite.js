import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";

const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState(null);

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

    // remove from favorites
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
                                <div className="card">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <p className="card-text  mb-0">{id}</p>
                                        <button onClick={() => handleDelete(id)} className="btn btn-outline-danger">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>You haven't added any favorites yet.</p>
            )}
        </div>
    );
};

export default Favorite;
