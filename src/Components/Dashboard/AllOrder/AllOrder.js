import React from 'react';
import { Col, Row, Spinner, Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderList from './OrderList';
import { useEffect } from 'react';
import { useState } from 'react';

const AllOrder = () => {
    const [orders, serOrders] = useState([]);
    useEffect(() => {
        fetch('https://salty-tundra-37477.herokuapp.com/allOrder')
        .then(res => res.json())
        .then( data => serOrders(data));
    }, [])
    return (
        <Row className="dashboard">
            <Col md={3}>
                <Sidebar></Sidebar>
            </Col>
            <Col className="dashboard-box">
                <Col sm={12} md={12} lg={10}>
                    <h2 className="mb-4">Service List</h2>
                    <Table striped bordered variant="primary">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.length === 0 ? <Spinner animation="border" variant="primary"></Spinner> :
                                orders.map(order => <OrderList order={order}></OrderList>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Col>
        </Row>
    );
};

export default AllOrder;