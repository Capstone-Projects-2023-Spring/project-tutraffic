import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './LoginRegister.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      setTextColor(1);
      setMessage("You are now logged in. You will soon be redirected.");
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }).catch((error) => { 
      setTextColor(0);
      console.error('Error signing in with email and password:', error);
      setMessage("Incorrect email or password.");
    });
  };

  const onFormSwitch = () => {
    navigate('/account/register')
  }

  return (
    <div className="auth-form-container">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className="text-center mt-3">Welcome</Card.Title>
          <p className="center-item">Login to TuTraffic</p>
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
            <div className="login-btn mt-4">
              <Button variant="primary" type="submit">Login</Button>
            </div>
          </Form>
          <div className="center-item mt-4">
            <p>Don't have an account?</p>
            <p style={{fontWeight:"bold", cursor:"pointer", color:"#4170cc"}} onClick={onFormSwitch}>Sign up</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
