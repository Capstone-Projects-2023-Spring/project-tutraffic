import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './UserSettings.css';

const AccountProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [carSize, setCarSize] = useState('nothing selected'); 
  const [lotType, setLotType] = useState('nothing selected'); 
  const [priceType, setPriceType] = useState('nothing selected'); 


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
  
  //added || lotType !== 'nothing selected' so user could just change the lotType of they wanted
  useEffect(() => { 
    if (user && (carSize !== 'nothing selected'|| lotType !== 'nothing selected'
    || priceType !== 'nothing selected'))  {
      const userData = {
        CarSize: carSize,
        lotType: lotType,
        priceType: priceType
      };
      setDoc(doc(db, "users", user.uid), userData);
    }
  }, [carSize, lotType, priceType, user]);

  // fetch the current user's car size and lot type 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setCarSize(userData.CarSize || 'Small');
          setLotType(userData.lotType || 'both');
          setPriceType(userData.priceType || 'all');
        }
      } catch (error) {
        console.log("Error fetching user data: ", error);
      }
    };
 
    if (user) {
      fetchUserData();
    }
  }, [user]);

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

        <Container style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
          <Container style={{ width: "800px", }}>
            <Container className="user-banner">
              <div className="icon-border">
                <img src={`${process.env.PUBLIC_URL}/images/defaulticon.png`} className="user-icon"></img>
              </div>
            </Container>
            <Container className="profile-settings">
              <div className="user-opts">
                <div style={{color: "rgb(100,100,100)"}}>CURRENT CAR SIZE: {carSize}</div>
              </div>
              <select className="dropdown-btns" value={carSize} onChange={(e) => setCarSize(e.target.value)}>
                <option value="Compact+">All Parking</option>
                <option value="Average">Exclude Compact Spaces</option>
                <option value="Large">Truck or Large Vehicle</option>
              </select>
              <div className="user-opts">
                <div style={{color: "rgb(100,100,100)"}}>PREFFERED LOT TYPE: {lotType}</div>
              </div>
              <select className="dropdown-btns" value={lotType} onChange={(e) => setLotType(e.target.value)}>
                <option value="both">All Parking</option>
                <option value="lot">Lot or Garage</option>
                <option value="street">Street Parking</option>
              </select>
              <div className="user-opts">
                <div style={{color: "rgb(100,100,100)"}}>PRICING OPTION: {priceType}</div>
              </div>
              <select className="dropdown-btns" value={priceType} onChange={(e) => setPriceType(e.target.value)}>
              <option value="all">All Parking</option>
                <option value="free">Only Free Parking</option>
              </select>
            </Container>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default AccountProfile;
