import React, { Component } from 'react';
import "./register.css"
import Button from 'react-bootstrap/esm/Button';

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div className="coverPage center">
                <h1>Register</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Button variant="primary">Register</Button>{''}
                <Button variant="outline-secondary" size="sm">Already have an account?</Button>{' '}
            </div>  
        );
    }
}
 
export default Register;