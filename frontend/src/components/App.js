import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConditionalNavr from "./ConditionalNavr";
import Home from "./Home";
import Data from "./Data";
import Login from "./Login";
import Register from "./Register";
import AccountInfo from "./AccountInfo";

export const App = () => {

  return (
    <Router>
      <div className="App" data-testid="app-component">
        <ConditionalNavr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/saved" element={<Data />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/info" element={<AccountInfo />} />
        </Routes>
      </div>
    </Router>
  );
};
