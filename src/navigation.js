import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import React, { useState } from 'react';

import Modal from 'react-modal';

import './css/navigation.css';

import logo from './logo.png';
import about from './about.png';
import mission from './our_mission.png';
import shop from './shop.png';
import favicon from './favicon.png';

import { useAlert } from 'react-alert';

Modal.setAppElement('#root');
function Navigation() {

    const alert = useAlert();

    const didTapSubscribeButton = e => {
        var email = prompt('Please enter your email:');
        var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        
        console.log(email);
    }

    const isValidEmail = (email) => {

    }

    return (
        <div>
            <Navbar collapseOnSelect className='navbar' fixed='top' expand='sm'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav align='center'>
                        <Button align='center' style={{
                            fontSize: '15px',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '10px',
                            borderRadius: '10px',
                            backgroundColor: 'grey',
                            boxShadow: '0 0 10px black',
                            width: '30vh',
                            alignSelf: 'center'
                        }} variant='light' onClick={function() {
                            window.location = '/';
                        }} className='homeButton'><img className='h-scat' src={favicon} /><div align='center'>The Happy Mum Company</div></Button>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/home`}><div className='navItems' align='center'><img className='homeIcon navIcons' src={logo} /><p>Home</p></div></Nav.Link>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/about`}><div className='navItems' align='center'><img className='navIcons' src={about} /><p>About</p></div></Nav.Link>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/shop`}><div className='navItems' align='center'><img className='navIcons' src={shop} /><p>Shop</p></div></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* <button align='right' className='subscribe-button' onClick={didTapSubscribeButton}>Subscribe</button> */}
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;