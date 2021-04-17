import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const Signup = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Text className="text-center">
            <h3>WELCOME</h3>
          </Form.Text>
          <Form.Text className="text-center">
            <h3>Create account</h3>
          </Form.Text>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control size="sm" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign up
          </Button>
          <Form.Text as="small" className="text-muted  my-2">
            Already registered? <Link to="/login">Sign in</Link>
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
