import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './AccountInfo.css';

const AccountInfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [passwordForm, setPasswordForm] = useState(false);
  
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
          <Modal show={passwordForm} onHide={() => setPasswordForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Update your password</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="current-password">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="currentPassword"
                  />
                  </Form.Group>
                  <Form.Group controlId="new-password">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                  />
                  </Form.Group>
                </Form>
              </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" type="reset" onClick={() => setPasswordForm(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={() => setPasswordForm(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
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
