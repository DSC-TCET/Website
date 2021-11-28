import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container";
import brandlogo from "../Images/gdsctcet.png"
function Header() {
  return (
    <div>
      <Navbar sticky="top" style={{height:"5vw"}} bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
      <img
        src={brandlogo}
        height="75"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/ "href="#home">About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/events" href="#link">Events</Nav.Link>
              <Nav.Link as={NavLink} to="/team" href="#link">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
