import React, { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const OrderForm = () => {
    const { category } = useParams();
    const [files, setFiles] = useState()
    const [order, setOrder] = useState({
        client: sessionStorage.getItem('userName'),
        email: sessionStorage.getItem('email'),
        category: category
    })
    const d = new Date()
    const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    const handleBlur = e => {
        const newOrder = { ...order };
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }
    const handleChange = e => {
        const newFile = e.target.files[0];
        setFiles(newFile);
    }
    const handleClick = () => {
        const formData = new FormData();
        formData.append('file', files);
        formData.append('date', date);
        formData.append('client', order.client);
        formData.append('email', order.email);
        formData.append('category', order.category);
        formData.append('price', order.price);
        formData.append('orderDetails', order.orderDetails);

        fetch('https://salty-tundra-37477.herokuapp.com/placeOrder', {
            method: "Post",
            header: {'content-type': 'application/json'},
            body: formData
        })
        .then( res => res.json())
        .then( data => {
            if(data){
                window.alert('Thanks for your order.');
            }
        })
    }
    return (
        <Form>
            <Form.Group controlId="formGridAddress1">
                <Form.Control name="client" onBlur={handleBlur} defaultValue={order.client} placeholder="Your name or company name" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Control name='email' onBlur={handleBlur} defaultValue={order.email} placeholder="Your email" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Control defaultValue={category} name="category" onBlur={handleBlur} placeholder="Category"/>
            </Form.Group>
            <Form.Group>
                <FormControl name="orderDetails" onBlur={handleBlur} as="textarea" aria-label="With textarea" placeholder="Project details" />
            </Form.Group>

            <Form.Group controlId="formGridCity">
                <Form.Control type="number" name='price' onBlur={handleBlur} placeholder="Price" />
            </Form.Group>

            <Form.Group>
                <Form.File name="img" onChange={handleChange} id="exampleFormControlFile1" className="upload-button" />
            </Form.Group>

            <Button onClick={handleClick} className="button" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default OrderForm;