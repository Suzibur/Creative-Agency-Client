import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = () => {
    const [info, setInfo] = useState({});
    const [files, setFiles] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleChange = e => {
        const newFile = e.target.files[0];
        setFiles(newFile);
    }
    const handleClick = () => {
        const formData = new FormData();
        formData.append('file', files);
        formData.append('category', info.category);
        formData.append('desc', info.desc);
        fetch(`https://salty-tundra-37477.herokuapp.com/addService`, {
            method:"Post",
            header: {'content-type':'application/json'},
            body:formData
        })
        .then( res => {
            if(res){
                alert('Successfully Posted')
            }
        })
    }
    return (
        <Form>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Service title:</Form.Label>
                <Form.Control onBlur={handleBlur} name="category" placeholder="Enter title" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <FormControl onBlur={handleBlur} name="desc" as="textarea" aria-label="With textarea" placeholder="Enter description" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Icon</Form.Label>
                <Form.File onChange={handleChange} name="img" id="exampleFormControlFile1" className="upload-button" />
            </Form.Group>

            <Button onClick={handleClick} variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddForm;