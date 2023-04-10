import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import Nav from 'react-bootstrap/Nav';
import './UserSettings.css';

const AccountProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [carSize, setCarSize] = useState('nothing selected'); 
  const [lotType, setLotType] = useState('nothing selected'); 


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Clean up the listener on component unmount
    return () => {
      unsubscribe();
    };
  }, []);
  
  useEffect(() => { // update the car size in Firestore whenever it changes
    if (user && (carSize === "Small" || carSize === "Average" || carSize === "Large")) {
      setDoc(doc(db, "users", user.uid), {
        CarSize: carSize,
        lotType: lotType,
      });
    }
  }, [carSize, lotType, user]);

  if (!user) {
    return (
      <div className="container mt-4">
        <h4>Please sign in to view your account information.</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="settings">
        <h1>User Settings</h1>

        <Nav className="mini-nav" activeKey="/account/info">
          <Nav.Item>
            <Nav.Link style={{color: "black"}} onClick={() => navigate("/account/info")}>Account Information</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="highlighted-btn" onClick={() => navigate("/account/profile")}>User Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="profile">
        <h2>User Profile</h2>
        <h4>Current Car Size: {carSize}</h4>
        <select value={carSize} onChange={(e) => setCarSize(e.target.value)}>
          <option value="">Nothing selected</option>
          <option value="Small">Small</option>
          <option value="Average">Average</option>
          <option value="Large">Large</option>
        </select>
        <h4>Current Lot Type: {lotType}</h4>
        <select value={lotType} onChange={(e) => setLotType(e.target.value)}>
          <option value="">Nothing selected</option>
          <option value="Parking Lot">Lot</option>
          <option value="Street">Stree</option>
        </select>
        </div>
    </div>
  );
};

export default AccountProfile;
