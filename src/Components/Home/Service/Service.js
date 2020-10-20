import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css'
import { useHistory } from 'react-router-dom';

const Service = ({ service }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/order/${service.category}`)
    }
    return (
        <Col xs={10} sm={10} md={5} lg={3} id="service" onClick={handleClick} className="mr-4 ml-4"> 
            <Card.Img style={{margin:'auto৶', display:'block'}} id="service-img" variant="top" src={`data:image/png;base64,${service.img.img}`} />
            <Card.Body>
                <Card.Title id="service-title">{service.category}</Card.Title>
                <Card.Text id="service-text">
                    {service.desc}
                </Card.Text>
            </Card.Body>
        </Col>
    );
};

export default Service;