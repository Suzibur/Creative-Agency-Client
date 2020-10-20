import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import clientsData from './clientsData'
import Client from '../Client/Client';
const Clients = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center mt-3 align-items-center">
                {
                    clientsData.map(client => <Client client={client}></Client>)
                }
            </Row>
        </Container>
    );
};

export default Clients;