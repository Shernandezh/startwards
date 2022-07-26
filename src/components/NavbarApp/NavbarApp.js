import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import galeria from '../assets/galeria';
import "../assets/Add.css"

const NavbarApp = () => {
  return (
    <div>
      <Navbar className='color' variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={galeria.icon}
              width="75"
              height="70"
              className="d-inline-block align-center"
            />{' '}
Game Nights
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavbarApp