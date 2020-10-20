import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import AddForm from './AddForm';

const AddService = () => {
    return (
        <Row className="dashboard">
            <Col md={3}>
                <Sidebar></Sidebar>
            </Col>
            <Col className="dashboard-box">
                <Col md={8}>
                    <h2 className="mb-4">Add more services</h2>
                    <AddForm></AddForm>
                </Col>
            </Col>
        </Row>
    );
};

export default AddService;