import React, { useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCommentAlt, faHome, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { useEffect } from 'react';
const Sidebar = () => {
    const userEmail = sessionStorage.getItem('email')
    const [admin, setAdmin] = useState(null);
    useEffect(() => {
        fetch('https://salty-tundra-37477.herokuapp.com/isAdmin', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ admin: userEmail })
        })
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [])
    return (
        <Col id="sidebar">
            <Image className="sidebar-logo" src={Logo}></Image>
            <Col className="sidebar-menu">
                {admin ?
                    <>
                            <Link to="/service-list" className="sidebar-link"><FontAwesomeIcon icon={faBox} /> Service List</Link>
                            <Link to="/addService" className="sidebar-link"><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                            <Link to="/addAdmin" className="sidebar-link"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                    </>
                    :
                    <>
                        <Link to="/order" className="sidebar-link"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link>
                        <Link to="/service" className="sidebar-link"><FontAwesomeIcon icon={faBox} /> Service List</Link>
                        <Link to="/review" className="sidebar-link"><FontAwesomeIcon icon={faCommentAlt} /> Review</Link>
                    </>
                }
                <Link to="/home" className="sidebar-link"><FontAwesomeIcon icon={faHome} /> Home</Link>
            </Col>
        </Col>
    );
};

export default Sidebar;