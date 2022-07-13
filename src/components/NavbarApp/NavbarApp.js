import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import galeria from '../assets/galeria';

const NavbarApp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={galeria.icon}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
Poro Store Games
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavbarApp