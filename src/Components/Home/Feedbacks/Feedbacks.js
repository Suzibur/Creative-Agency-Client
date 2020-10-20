import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch(`https://salty-tundra-37477.herokuapp.com/allFeedback`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setFeedbacks(data));
    }, [])
    const displayFeedbacks = feedbacks.slice(0, 3);
    return (
        <Col className="mt-5">
            <p className="services-title">Clients<span>Feedbacks</span></p>
            <Row className="mt-5 d-flex justify-content-center">
                {
                    displayFeedbacks.length === 0 ? <Spinner animation="border" variant="success"></Spinner> :
                    displayFeedbacks.map(feedback => <Feedback feedback={feedback}></Feedback>)
                }
            </Row>
        </Col>
    );
};

export default Feedbacks;