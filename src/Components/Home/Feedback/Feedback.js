import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feedback.css'

const Feedback = ({ feedback }) => {
    return (
        <Col xs={10} sm={8} md={5} lg={3} id="feedback" className="mr-4 ml-4">
            <Col className="d-flex align-items-center mb-3">
                <Image id="feedback-img" src={feedback.photo}></Image>
                <Card.Text id="feedback-person">{feedback.name}<br />{feedback.company}</Card.Text>
            </Col>
            <p id="feedback-text">{feedback.details}</p>
        </Col>
    );
};

export default Feedback;