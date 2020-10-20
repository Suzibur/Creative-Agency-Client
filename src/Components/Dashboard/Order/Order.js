import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import OrderForm from './OrderForm';
import './Order.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Order = () => {
    return (
        <Row className="dashboard">
            <Col md={3}>
                <Sidebar></Sidebar>
            </Col>
            <Col className="dashboard-box">
                <Col md={8}>
                    <h2 className="mb-4">Order</h2>
                    <OrderForm></OrderForm>
                </Col>
            </Col>
        </Row>
    );
};

export default Order;