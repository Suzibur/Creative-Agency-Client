import React from 'react';
import { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const ReviewForm = () => {
    const [review, setReview] =  useState({
        name:sessionStorage.getItem('userName'),
        photo:sessionStorage.getItem('photo'),
    });
    console.log(review)
    const handleBlur = e => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleSubmit = () => {
        fetch('https://salty-tundra-37477.herokuapp.com/addFeedback', {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                window.alert('Thanks for your valuable feedback.')
            }
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridAddress1">
                <Form.Control onBlur={handleBlur} name="name" placeholder="Your name" defaultValue={review.name}/>
            </Form.Group>


            <Form.Group controlId="formGridAddress2">
                <Form.Control onBlur={handleBlur} name="company" placeholder="Your company name" />
            </Form.Group>

            <Form.Group>
                <FormControl onBlur={handleBlur} as="textarea" name="details" aria-label="With textarea" placeholder="Project details" />
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ReviewForm;