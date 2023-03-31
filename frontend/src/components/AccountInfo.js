import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, updatePassword, updateEmail } from 'firebase/auth';
import { reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './UserSettings.css';

const AccountInfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [emailForm, setEmailForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState(false);
  const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState(0);
  
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

  if (!user) {
    navigate('/account/login');
    return;
  }

  const changeEmail = async (e) => {
    e.preventDefault();
    setTextColor(0);
    const user = auth.currentUser;
    const cred = EmailAuthProvider.credential(user.email, currentPassword);

    // In order to change the email the user must reauthenticate
    await reauthenticateWithCredential(user, cred).then(() => {
      if (newEmail === "") {
        setMessage("Please enter a valid email address.");
        return;
      } else {
        updateEmail(user, newEmail).then(() =>{
          setTextColor(1);
          console.log("Email updated");
          setMessage("Email has been successfully updated!");
          setTimeout(() => {closeModal()}, 2000);
        });
      }
    }).catch((error) => { 
      console.log(error.message);
      if (error.code === 'auth/wrong-password') {
        setMessage("Incorrect password.");
      } else if (error.code === 'auth/internal-error') {
        setMessage("Please enter your current password.");
      }
    });
  }

  const changePassword = async (e) => {
    e.preventDefault();
    setTextColor(0);
    const user = auth.currentUser;
    const cred = EmailAuthProvider.credential(user.email, currentPassword);

    // In order to change the password the user must reauthenticate
    await reauthenticateWithCredential(user, cred).then(() => {
      if (newPassword === "") {
        setMessage("Password must be at least 6 characters long.");
        return;
      } else {
        if (newPassword === confirmPassword) {
          updatePassword(user, newPassword).then(() => {
            setTextColor(1);
            console.log("Password updated");
            setMessage("Password has been successfully updated!");
            setTimeout(() => {closeModal()}, 2000);
          }).catch((error) => { 
            console.log(error.message);
            if (error.code === 'auth/weak-password') {
              setMessage("Password must be at least 6 characters long.");
            }
          });
        } 
        else if (confirmPassword === "") {
          console.log("'Confirm Password' field is empty");
          setMessage("Please confirm your password.");
        } else {
          console.log("New and current passwords don't match");
          setMessage("Passwords must match.");
        }
      }
    }).catch((error) => { 
      console.log(error.message);
      if (error.code === 'auth/wrong-password') {
        setMessage("Incorrect password.");
      } else if (error.code === 'auth/internal-error') {
        setMessage("Please enter your current password.");
      }
    });
  };

  // Resets all values when clicking outside a modal or clicking the "close" button
  const closeModal = () => {
    setMessage("");
    setNewEmail("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setEmailForm(false);
    setPasswordForm(false);
  }

  return (
    <div className="container mt-4">
      <div className="settings">
        <h1>User Settings</h1>

        <Nav className="mini-nav" activeKey="/account/info">
          <Nav.Item>
            <Nav.Link className="highlighted-btn" href="/account/info">Account Information</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{color: "black"}} href="/account/profile">User Profile</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="header-title">
          <h7 style={{color: "rgb(100,100,100)"}}>PERSONAL DETAILS</h7>
        </div>

        <div className="section">
          <div className="data-container">
            <h5>Email Address</h5>
            <p>{user.email}</p>
          </div>
          <div className="change-btn">
            <Button onClick={() => setEmailForm(true)}>Change</Button>
            <Modal show={emailForm} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Update your email</Modal.Title>
              </Modal.Header>
              <Form onSubmit={changeEmail}>
                <Modal.Body>
                  <p style={{color: textColor ? "blue" : "red" }}>{message}</p>
                  <Form.Group controlId="current-password">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      type="password"
                      name="currentPassword"
                    />
                  </Form.Group>
                  <Form.Group controlId="new-email">
                  <Form.Label>New Email</Form.Label>
                    <Form.Control
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      type="email"
                      name="newEmail"
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" type="reset" onClick={closeModal}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit" >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        </div>

        <div className="section">
          <div className="data-container">
            <h5>Password</h5>
            <p>Password must be at least 6 characters long</p>
          </div>
          <div className="change-btn">
            <Button onClick={() => setPasswordForm(true)}>Change</Button>
            <Modal show={passwordForm} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Update your password</Modal.Title>
              </Modal.Header>
              <Form onSubmit={changePassword}>
                <Modal.Body>
                  <p style={{color: textColor ? "blue" : "red" }}>{message}</p>
                  <Form.Group controlId="current-password">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      type="password"
                      name="currentPassword"
                    />
                  </Form.Group>
                  <Form.Group controlId="new-password">
                  <Form.Label>New Password</Form.Label>
                    <Form.Control
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      type="password"
                      name="newPassword"
                    />
                  </Form.Group>
                  <Form.Group controlId="confirm-password">
                  <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      name="confirmPassword"
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" type="reset" onClick={closeModal}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit" >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        </div>

        <div className="header-title">
          <h7 style={{color: "rgb(100,100,100)"}}>DELETE ACCOUNT</h7>
        </div>
        <div className="delete-btn">
          <Button>DELETE ACCOUNT</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
