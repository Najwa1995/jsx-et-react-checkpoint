import React from "react";
import './nav.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navs = () => {
  return (
    <Navbar expand="lg" className="nav1">
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Link href="#home">Facebook</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs;
