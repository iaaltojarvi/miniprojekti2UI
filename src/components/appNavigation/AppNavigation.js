import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class AppNavigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>HipsteriDevskulit</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link to="/">Koti</Nav.Link>
            </Nav>
            <Button variant="primary">Login</Button>
            <Button variant="primary">Sign Up</Button>
            <Button variant="secondary">Profile</Button>
        </Navbar>;
      </div>
    )
  }
}
