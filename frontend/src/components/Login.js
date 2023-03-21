import React, { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home')
    }
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