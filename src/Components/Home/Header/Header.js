import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from '../Menubar/Menubar';
import { Col, Container } from 'react-bootstrap';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <Col className="header">
            <Container>
                <Menubar></Menubar>
                <HeaderMain></HeaderMain>
            </Container>
        </Col>
    );
};

export default Header;