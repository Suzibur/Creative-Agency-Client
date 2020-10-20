import React from 'react';
import { useState } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleBlur = e => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }
    const handleClick = () => {
        fetch(`https://salty-tundra-37477.herokuapp.com/addAdmin`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
        .then( res => res.json())
        .then( data => {
            if(data){
                window.alert(`You added a admin now.`)
            }
        })
    }
    return (
        <Row className="dashboard">
            <Col md={3}>
                <Sidebar></Sidebar>
            </Col>
            <Col className="dashboard-box">
                <Col md={6}>
                    <h2 className="mb-4">Add admin</h2>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="email"
                            name='admin'
                            onBlur={handleBlur}
                            placeholder="Enter admin email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button onClick={handleClick} variant="success">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Col>
        </Row>
    );
};

export default AddAdmin;