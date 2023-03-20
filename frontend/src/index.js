import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);

