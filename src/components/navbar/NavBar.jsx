import { useAuth } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/cyberpunk.svg';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getBacklogData, getSprintIssueData } from '../../redux/actions/backlog.actions';
import { getSprintData } from '../../redux/actions/sprint.actions';
import { setSelectedSprint } from '../../redux/actions/selected.actions';

const NavBar = () => {
  const { signOut } = useAuth();
  const dispatch = useDispatch()
  const { sprints } = useSelector(state => state.sprints)
  const { board } = useSelector(state => state.selected)

  const handleSprintChange = (e) => {

    dispatch(setSelectedSprint({
      sprint: e
    }))

    if (e.id === -1) {
      dispatch(getBacklogData(board.id))
    }
    
    else {
      dispatch(getSprintIssueData(board.id, e.id))
    }
  }

  useEffect(() => {
    dispatch(getBacklogData(board.id))
  }, [])

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
          <Nav.Link >{board?.name}</Nav.Link>
          <Select
            options={sprints}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={handleSprintChange}
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
