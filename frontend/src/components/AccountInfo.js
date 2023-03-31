import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, updatePassword, updateEmail } from 'firebase/auth';
import { auth } from '../firebase';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './AccountInfo.css';
import { reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

const AccountInfo = () => {
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
    return <div>Please sign in to view your account information.</div>;
  }

  const changePassword = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const cred = EmailAuthProvider.credential(user.email, currentPassword);

    // In order to change the password the user must reauthenticate
    await reauthenticateWithCredential(user, cred).then(() => {
      if (newPassword === "") {
        setTextColor(0);
        setMessage("Password must be at least 6 characters long.");
        return;
      } else {
        updatePassword(user, newPassword).then(() => {
          setTextColor(1);
          console.log("Password updated");
          setMessage("Password has been successfully updated!");
          setTimeout(() => {closeModal()}, 2000);
        }).catch((error) => { 
          setTextColor(0);
          console.log(error.message);
          if (error.code === 'auth/weak-password') {
            setMessage("Password must be at least 6 characters long.");
          }
        });
      }
    }).catch((error) => { 
      setTextColor(0);
      console.log(error.message);
      if (error.code === 'auth/wrong-password') {
        setMessage("Incorrect password.");
      } else if (error.code === 'auth/internal-error') {
        setMessage("Please enter your current password.");
      }
    });
  };

  const closeModal = () => {
    setMessage("");
    //setCurrentEmail("");
    setCurrentPassword("");
    setNewPassword("");
    setEmailForm(false);
    setPasswordForm(false);
  }

  return (
    <div className="settings">
      <h1>User Settings</h1>
      ACCOUNT INFORMATION<hr/>

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

      DELETE ACCOUNT<hr/>
      <div className="delete-btn">
        <Button>DELETE ACCOUNT</Button>
      </div>
    </div>
  );
};

export default AccountInfo;
