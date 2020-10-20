import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frame from '../../../images/logos/Frame.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <Row className="mt-5 d-flex justify-content-between">
            <Col md={6} lg={4}>
                <h1>Let's Grow Your Brand To The Next Level</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga ex at consequatur adipisci expedita, rem mollitia odio dignissimos? Aspernatur?</p>
                <Button className="button">Hire Us</Button>
            </Col>
            <Col md={6}>
                <Image className="img" src={Frame}></Image>
            </Col>
        </Row>
    );
};

export default HeaderMain;