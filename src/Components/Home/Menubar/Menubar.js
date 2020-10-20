import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png'
import './Menubar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

const Menubar = () => {
    const userName = sessionStorage.getItem('userName');
    const signOut = () => {
        sessionStorage.clear();
        window.location.reload();
    }
    return (
        <Navbar expand="lg">
            <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">
                <Image style={{ width: '150px' }} src={Logo}></Image>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/home" className="menu-item">Home</Link>
                    <Link className="menu-item">Our Portfolio</Link>
                    <Link className="menu-item">Our Team</Link>
                    <Link className="menu-item">Contact Us</Link>
                </Nav>
                {
                    userName ?
                        <>
                            <Button className="button"><Link to="/dashboard" className="button-link">Dashboard</Link></Button>
                            <Button onClick={signOut} variant="none"><Link className="logout-btn"><FontAwesomeIcon icon={faUserMinus} /></Link></Button>
                        </>
                        :
                        <Button className="button"><Link to="/login" className="button-link">Login</Link></Button>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;