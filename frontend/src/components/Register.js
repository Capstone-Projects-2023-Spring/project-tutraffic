import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './LoginRegister.css';

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTextColor(0);

    // These are called before await in order to display the correct message
    if (email === "") {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (password === "") {
      setMessage("Please enter a password.");
      return;
    }
    if (confirmPassword === "") {
      setMessage("Please confirm your password.");
      return;
    }
    if (confirmPassword !== password) {
      setMessage("Passwords do not match.");
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      console.log("Successful login");
      setTextColor(1);
      setMessage("Account successfully created. You will soon be redirected.");
      setTimeout(() => {
        navigate('/account/info');
      }, 2000);
    }).catch((error) => { 
      console.log(error.message);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setMessage("Email already in use by another user.");
          break;
        case 'auth/weak-password':
          setMessage("Password must be at least 6 characters long.");
          break;
        default:
          setMessage("Error registering user.");
      }
    });
  };

  const onFormSwitch = () => {
    navigate('/account/login')
  }

  return (
    <div className="auth-form-container">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className="text-center mt-3">Create Your Account</Card.Title>
          <p className="center-item">Sign up for TuTraffic</p>
          <p style={{color: textColor ? "blue" : "red" }}>{message}</p> 
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
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
            <div className="login-btn mt-4">
              <Button variant="primary" type="submit">Create</Button>
            </div>
          </Form>
          <div className="center-item mt-4">
            <p>Already have an account?</p>
            <p style={{fontWeight:"bold", cursor:"pointer", color:"#4170cc"}} onClick={onFormSwitch}>Log in</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
