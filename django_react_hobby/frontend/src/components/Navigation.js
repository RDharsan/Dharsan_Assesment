import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../static/logo.png'
import "../App.css";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />{' '}
            Hobby Management Tool
        </Navbar.Brand>
    </Navbar>
    </div>
  );
};

export default Navigation;