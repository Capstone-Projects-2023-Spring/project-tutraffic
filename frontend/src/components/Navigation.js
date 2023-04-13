import React, { useEffect, useState } from "react";

import { Home, Map, FileText, Heart, UserPlus, UserCheck } from "react-feather";

import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from "react-bootstrap/Button";

import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

import './Navigation.css';

const Navigation = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      navigate('/home');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <main className="wrapper">
      {isMobile ? (

        <Nav style={{ height: "77px" }}>
          <Navbar className="mobile">
            <Nav className="justify-content-around" style={{ width: "100%" }}>
              <Nav.Link onClick={() => navigate('/home')} className="d-flex flex-column align-items-center">
                <Home />
                <div>Home</div>
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/map')} className="d-flex flex-column align-items-center">
                <Map />
                <div>Map</div>
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/browse')} className="d-flex flex-column align-items-center">
                <FileText />
                <div>Browse</div>
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/favorite')} className="d-flex flex-column align-items-center">
                <Heart />
                <div>Favorite</div>
              </Nav.Link>
              {userEmail ? (
                <Nav.Link onClick={() => navigate('/account/info')} className="d-flex flex-column align-items-center">
                  <UserCheck />
                  <div>Account</div>
                </Nav.Link>
              ) : (
                <Nav.Link onClick={() => navigate('/account/login')} className="d-flex flex-column align-items-center">
                  <UserPlus />
                  <div>Login</div>
                </Nav.Link>
              )}
            </Nav>
          </Navbar>
        </Nav>
      ) : (
        <Navbar style={{ padding: "4px" }}>

          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Button variant="light brand" onClick={() => navigate('/home')}>
                <Navbar.Brand>

                  <img src={process.env.PUBLIC_URL + "/logo.png"} height="28" alt="TuTraffic Logo" />

                </Navbar.Brand>
              </Button>
              <Button variant="light links" onClick={() => navigate('/map')}>Map</Button>
              <Button variant="light links" onClick={() => navigate('/browse')}>Browse</Button>
              <Button variant="light links" onClick={() => navigate('/favorite')}>Favorites</Button>
              {userEmail ? (
                <Navbar.Collapse className="justify-content-end">

                  <DropdownButton variant="light" align="end" title={<IoNotificationsOutline size={30} />} >
                    <></>
                  </DropdownButton>
                  <DropdownButton variant="light" align="end" title={<IoSettingsOutline size={30} />} >
                    <Dropdown.ItemText>Signed in as</Dropdown.ItemText>
                    <Dropdown.ItemText className="item-email">{userEmail}</Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => navigate('/account/info')}>Account Info</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate('/account/profile')}>User Profile</Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
                  </DropdownButton>
                </Navbar.Collapse>
              ) : (
                <Navbar.Collapse className="justify-content-end">
                  <Button variant="secondary" onClick={() => navigate('/account/login')}>Login</Button>
                </Navbar.Collapse>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </main>
  );
};

export default Navigation;
