import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home')
    }
    const onFormSwitch = () => {
        navigate('/register')
    }

        return (
            <div className='auth-form-container'>
                <div>
                    <h1>Login</h1>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email@gmail.com" id='email' name='email'/>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password" id='password' name='password'/>
                        <Button variant="primary" type="submit">Login</Button>{''}
                    </form>
                    <Button className='formswitch' onClick={onFormSwitch} variant="outline-secondary" size="sm">Create Account</Button>{' '}
                </div>
            </div>
        );
    }
 
export default Login;