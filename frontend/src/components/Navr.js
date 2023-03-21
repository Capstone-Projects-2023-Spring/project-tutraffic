import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navr() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">TuTraffic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/data">Data</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/account/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/account/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/account/3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/account/4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}