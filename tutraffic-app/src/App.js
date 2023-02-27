import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // store message
  const [message, setMessage] = useState([]);

  // fetch message from backend
  useEffect(() => {
    fetch('http://localhost:5000/profile')
      .then((response) => response.json())
      .then((data) => {
        console.log(`Received message from server: ${data.about}`);
        setMessage(data.about);
      })
      .catch((error) => {
        console.error(`Error fetching message from server: ${error}`);
      });
  }, []);

  return (
      <div>
        <p>Message received: {message}</p>
      </div>
  );
}

export default App;
