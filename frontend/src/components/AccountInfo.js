import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, updatePassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './AccountInfo.css';

const AccountInfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailForm, setEmailForm] = useState(false);
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

  const changePassword = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    updatePassword(user, newPassword).then(() => {
      // Update successful.
    }).catch((error) => {
      // An error ocurred
    });

    setCurrentPassword("");
    setNewPassword("");
};

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
            <Form onSubmit={changePassword}>
              <Modal.Body>
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
                <Button variant="secondary" type="reset" onClick={() => setPasswordForm(false)}>
                  Close
                </Button>
                <Button variant="primary" type="submit" onClick={() => setPasswordForm(false)}>
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
