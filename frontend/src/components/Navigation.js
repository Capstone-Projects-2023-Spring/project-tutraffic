import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Map, FileText, Bookmark, User } from "react-feather";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import './Navigation.css';
import logo from '../images/logo_t.png';

const Navigation = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  const pageTitle = "TuTraffic";

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
        <>
          <Navbar className="topnav">
            <Container>
              <Navbar.Brand>
                <img src={logo} height="30" alt="mobile Logo" />
                {pageTitle}
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar className="mobile">
            <Nav className="justify-content-around" style={{ width: "100%" }}>
              <Nav.Link onClick={() => navigate('/')}>
                <Map />
                <div>Home</div>
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/browse')}>
                <FileText />
                <div>Browse</div>
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/favorite')}>
                <Bookmark />
                <div>Favorite</div>
              </Nav.Link>
              {userEmail ? (
                <Nav.Link onClick={() => navigate('/account/info')}>
                  <User />
                  <div>Account</div>
                </Nav.Link>
              ) : (
                <Nav.Link onClick={() => navigate('/account/login')}>
                  <User />
                  <div>Account</div>
                </Nav.Link>
              )}
            </Nav>
          </Navbar>
        </>
      ) : (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
          <Container>
            <Navbar.Brand onClick={() => navigate('/')}>
              <img src={logo} height="30" alt="TuTraffic Logo" />
              {pageTitle}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate('/browse')}>Browse</Nav.Link>
                <Nav.Link onClick={() => navigate('/favorite')}>Favorite</Nav.Link>
              </Nav>

              {userEmail ? (
                <Nav>
                  <NavDropdown title={userEmail} id="user-nav-dropdown">
                    <NavDropdown.Item onClick={() => navigate('/account/info')}>Account Detail</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <Nav className="border">
                  <Nav.Link onClick={() => navigate('/account/login')}>Login</Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </main>
  );
};

export default Navigation;
