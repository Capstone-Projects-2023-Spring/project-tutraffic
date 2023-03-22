import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { auth } from '../firebase';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            console.error('Error signing in with email and password:', error);
            setShowErrorModal(true);
        }
    };

    const onFormSwitch = () => {
        navigate('/account/register')
    }

    return (
        <div className="auth-form-container">
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Login</Card.Title>
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email@gmail.com"
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </Form.Group>
                        <Button className="mt-3" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login Error</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>There was an error Logging to your account. Please try again.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button
                        className="formswitch mt-3"
                        onClick={onFormSwitch}
                        variant="outline-secondary"
                        size="sm"
                    >
                        Create Account
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default Login;