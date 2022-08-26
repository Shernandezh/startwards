import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import galeria from '../assets/galeria';
import "../assets/Add.css"
import {Link} from 'react-router-dom'

const NavbarApp = () => {
  return (
    <div>
      <Navbar className="color">
        <Container>
        <img
              src={galeria.logo}
              width="80"
              height="75"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
          <Nav  className="me-auto">
            <Nav.Link className='texto-nav' style={{color:'white'}}><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link className='texto-nav' style={{color:'white'}}><Link to='/personajes'>Personajes</Link></Nav.Link>
            <Nav.Link className='texto-nav' style={{color:'white'}}><Link to='/planetas'>Planetas</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}



export default NavbarApp