import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
    const currentYear = new Date()
    return (
        <Col id="footer">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col md={4}>
                        <p id="footer-title">Let us handle your project, professionally.</p>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col md={6}>
                        <input className="input-text" type="email" placeholder="Your email address"></input>
                        <input className="input-text" type="text" placeholder="Your name or company name"></input>
                        <textarea className="text-box" type="text" placeholder="Your message"></textarea>
                        <Button className="button">Send</Button>
                    </Col>
                </Row>
            </Container>
            <p id="copyright">copyright Orange labs {currentYear.getFullYear()}</p>
        </Col>
    );
};

export default Footer;