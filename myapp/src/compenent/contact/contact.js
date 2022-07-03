import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className='container'>
                <h2 ><span className='contact0'>Contact me</span></h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className='button1'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="primary" type="reset">
                            reset
                        </Button>
                    </div>
                </Form>
            </div>

          

        </section >
    )
}
export default Contact;