import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  // store message
  const [messages, setMessages] = useState([]);

  // receive server message using socket.io
  useEffect(() => {
    const socket = io('http://server-address');

    socket.on('message', data => {
      setMessages([...messages, data]);
    });

    return () => {
      socket.disconnect();
    };

  }, [messages]);

  return (
    <div className="App">
      <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
