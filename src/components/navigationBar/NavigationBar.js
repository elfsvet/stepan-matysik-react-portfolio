import React from 'react';
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from '../../helpers/navigationLinks'
const createLinks = () => {
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

const NavigationBar = () => {
    return (
        <div id='home'>
            <Navbar className='navigation-container' collapseOnSelect expand="md" style={{ zIndex: 2}}>
                <Navbar.Brand href="#home" style={{ marginLeft: '1rem' }}>
                    Stepan Matysik
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ justifyContent: "flex-end", marginRight: "1rem", borderColor: "none" }}>
                    <Nav className='links' style={{ margin: '0 1rem' }}>
                        {createLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;