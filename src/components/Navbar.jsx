import React from 'react';
import {Navbar, Nav, Container}from "react-bootstrap";

export default function NavbarComponent() {
  return (
  <>
    <Navbar className="navBg fixed-top" bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="/" className="text-white">Carlos Murillo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link href='#herocontainer' className="text-white">Home</Nav.Link>
            <Nav.Link href='#skillscontainer' className="text-white">Skills</Nav.Link>
            <Nav.Link href='#experiencecontainer' className="text-white">Experience</Nav.Link>
            <Nav.Link href='#contactontainer' className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}
