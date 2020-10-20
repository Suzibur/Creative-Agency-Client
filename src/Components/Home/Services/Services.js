import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://salty-tundra-37477.herokuapp.com/allService`, {
            method:"GET"
        })
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <Col className="services">
            <p className="services-title">Provide awesome <span>services</span></p>
            <Row className="d-flex justify-content-center">
                {services.length === 0? <Spinner animation="border" variant="success" />:
                    services.map(service => <Service service={service}></Service>)
                }
            </Row>
        </Col>
    );
};

export default Services;