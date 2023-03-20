import React, { Component } from 'react';
import "./login.css"

class Login extends Component {
    state = { 
        username: null,
        password: null,
        count: 0
     } 
    render() { 
        return (
            <div className="coverPage">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
            </div>
        );
    }
}
 
export default Login;