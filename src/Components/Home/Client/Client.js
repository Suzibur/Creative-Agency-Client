import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Client = ({client}) => {
    return (
        <Col xs={2} sm={2} md={2}>
            <Image style={{width:'100%', height:'auto'}} src={client.img}></Image>
        </Col>
    );
};

export default Client;