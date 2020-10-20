import React, { useEffect, useState } from 'react';
import { Card, Col, Spinner } from 'react-bootstrap';
import Graphics from '../../../images/icons/service1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'

const Cart = ({ category }) => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`https://salty-tundra-37477.herokuapp.com/byCategory?category=${category}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <Col xs={10} sm={10} md={6} lg={5}>
            { service.length > 0 &&
                    <Card id="cart">
                        <Card.Img id="cart-img" variant="top" src={`data:image/png;base64,${service[0].img.img}`} />
                        <Card.Body>
                            <Card.Title id="cart-title">{service[0].category}</Card.Title>
                            <Card.Text id="cart-text">{service[0].desc}</Card.Text>
                        </Card.Body>
                    </Card>
            }
        </Col>
    );
};

export default Cart;