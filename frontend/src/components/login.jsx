import React, { Component } from 'react';
import "./login.css"
import Button from 'react-bootstrap/Button';

class Login extends Component {
    state = { 
        username: null,
        password: null,
        count: 0
     } 
    render() { 
        return (
            <div className="coverPage center">
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <Button variant="primary">Login</Button>{''}
                <Button variant="outline-secondary" size="sm">Create Account</Button>{' '}

            </div>
        );
    }
}
 
export default Login;