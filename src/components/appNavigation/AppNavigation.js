import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppNavigation.css';

export default class AppNavigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>HipsteriDevskulit</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/"></Link>
            </Nav>
            <Link to="/"><Button variant="primary" to="/">Home</Button></Link>
            <Link to="/login"><Button variant="primary" to="/login">Login</Button></Link>
            <Link to="/signup"><Button variant="primary" to="/signup">Sign Up</Button></Link>
            <Link to="/profile"><Button variant="secondary">Profile</Button></Link>
        </Navbar>
      </div>
    )
  }
}
