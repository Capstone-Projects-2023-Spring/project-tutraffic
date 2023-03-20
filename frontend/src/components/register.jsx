import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch("http://127.0.0.1:8080/users/create", {
            method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({
                email: email,
                password: password,
              }),
        })
        const data = response.json()
            console.log("Success:", data);
    } catch (error){
        console.log(error);
    }
    }

        const onFormSwitch = () => {
            navigate('/login')
    }
        return (
            <div className='auth-form-container'>
                <div>
                    <h1>Register</h1>
                    <form className='register-form' onSubmit={handleSubmit}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email@gmail.com" id='email' name='email'/>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password" id='password' name='password'/>
                        <Button variant="primary" type="submit">Register</Button>{''}
                    </form>
                    <Button className='formswitch' onClick={onFormSwitch} variant="outline-secondary" size="sm">Already have an account?</Button>{' '}
                </div>
            </div>
        );
    }
 
export default Register;