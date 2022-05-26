import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (

        <Navbar bg="dark" variant='dark' sticky='top' expand="lg">
            <Container fluid>
                <Link to="/" className='title'>Softmind Affiliate</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <nav className='ms-auto'>
                        <CustomLink to='/home' className='me-3'>Home</CustomLink>
                        <CustomLink to='/distribution' className='me-3'>Distribution</CustomLink>
                        <CustomLink to='/user/id' className='me-3'>User</CustomLink>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;