import React from 'react';
import { CardDeck, Col, Row, Spinner } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Sidebar from '../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Order/Order.css'
import { useState } from 'react';
import { useEffect } from 'react';
const OrderCart = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://salty-tundra-37477.herokuapp.com/orderbyUser?email=${sessionStorage.getItem('email')}`)
        .then( res => res.json())
        .then( data => setOrders(data));
    }, [])
    return (
        <Row className="dashboard">
            <Col md={3}>
                <Sidebar></Sidebar>
            </Col>
            <Col className="dashboard-box">
                <Col md={8}>
                    <h3 className="mb-4">Service with us</h3>
                </Col>
                <CardDeck className="ml-5">
                    {
                        orders.length === 0 ?
                        <Spinner animation="border" variant="primary"></Spinner> :
                        orders.map(order => <Cart category={order.category}></Cart>)
                    }
                </CardDeck>
            </Col>
        </Row>
    );
};

export default OrderCart; 