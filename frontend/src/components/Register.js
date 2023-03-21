import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Success:", userCredential);
            navigate('/');
        } catch (error) {
            console.error('Error registering user with email and password:', error);
            setShowErrorModal(true);
        }
    };

    const onFormSwitch = () => {
        navigate('/account/login')
    }
    return (
        <div className='auth-form-container'>
            <div>
                <h1>Register</h1>
                <form className='register-form' onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email@gmail.com" id='email' name='email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password" id='password' name='password' />
                    <Button variant="primary" type="submit">Register</Button>{''}
                </form>
                <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>There was an error registering your account. Please try again.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Button className='formswitch' onClick={onFormSwitch} variant="outline-secondary" size="sm">Already have an account?</Button>{' '}
            </div>
        </div>
    );
}

export default Register;