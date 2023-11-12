import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/cyberpunk.svg'

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <div className='navbar-title'>
                    <span className='main-title'>Cyberpunk</span>
                    <span className='subtitle'>Software project</span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navbar-section-1">
                    <Nav.Link href="#home">CP - Scrum board</Nav.Link>
                    <NavDropdown title="Sprints" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sprint 01</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Sprint 02</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Sprint 03</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className='navbar-section-2'>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;