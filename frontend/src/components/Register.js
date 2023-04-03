import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Card, Button, Form, Modal, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('Success:', userCredential);
      navigate('/');
    } catch (error) {
            console.error('Error registering user with email and password:', error);
            setShowErrorModal(true);
            setTimeout(() => {
                setShowErrorModal(false);
            }, 2000);
    }
  };

  const onFormSwitch = () => {
    navigate('/account/login');
  };

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className='fw-bold mb-4'>Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formEmail'>
              <Form.Label className='fw-bold mb-2'>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label className='fw-bold mb-2'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formConfirmPassword'>
              <Form.Label className='fw-bold mb-2'>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Form.Group>

            <Button variant='primary' type='submit' className='mb-3'>
              Register
            </Button>
          </Form>

          <div className='d-flex justify-content-between'>
            <Button
              className='formswitch mb-3'
              onClick={onFormSwitch}
              variant='outline-secondary'
              size='sm'
            >
              Already have an account?
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There was an error registering your account. Please try again.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Register;