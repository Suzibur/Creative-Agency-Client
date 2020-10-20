import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import ReviewForm from './ReviewForm';

const Review = () => {
    return (
        <Row className="dashboard">
            <Col md={3}>
                <Sidebar></Sidebar>
            </Col>
            <Col className="dashboard-box">
                <Col md={8}>
                    <h2 className="mb-4">Review us</h2>
                    <ReviewForm></ReviewForm>
                </Col>
            </Col>
        </Row>
    )};

export default Review;