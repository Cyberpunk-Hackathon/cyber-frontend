import { useAuth } from '@clerk/clerk-react';
import React from 'react';
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/cyberpunk.svg';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const NavBar = () => {
  const { signOut } = useAuth();
  const { sprints } = useSelector(state => state.sprints)
  const { board } = useSelector(state => state.selected)

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        <div className='navbar-title'>
          <span className='main-title'>Cyberpunk</span>
          <span className='subtitle'>Software project</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto navbar-section-1'>
          <Nav.Link >{board.name}</Nav.Link>
          <Select
            options={sprints}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
          />
          <Button
            variant='outline-danger'
            onClick={async () => {
              sessionStorage.clear()
              await signOut()
            }}
          >
            Sign Out
          </Button>
        </Nav>
        <Nav className='navbar-section-2'>
          <div></div>
          <div></div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
