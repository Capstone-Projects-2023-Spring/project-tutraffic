import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
            console.error('Error signing in with email and password:', error);
            setShowErrorModal(true);
            setTimeout(() => {
                setShowErrorModal(false);
            }, 2000);
        }
    };

  const onFormSwitch = () => {
    navigate("/account/register");
  };

  return (
    <div className="container mt-5 h-100">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card border="primary">
            <Card.Body>
              <Card.Title className="fw-bold mb-4">Login</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label className="mb-2 fw-bold">Email address</Form.Label>
                  <Form.Control
                    className="auth-form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email@gmail.com"
                    name="email"
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label className="mb-2 fw-bold">Password</Form.Label>
                  <Form.Control
                    className="auth-form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>
                <Button
                  className="auth-form-button mt-3"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Button
                  className="auth-form-switch"
                  onClick={onFormSwitch}
                  variant="outline-secondary"
                  size="sm"
                >
                  Create Account
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Login Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              There was an error Logging to your account. Please try again.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Login;