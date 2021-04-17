import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container ,Col} from "react-bootstrap";

const Signin = () => {
  return (
    <div>
      <Container>
        <Col>
        <Form>
          <Form.Text className="text-center">
            <h3>WELCOME BACK</h3>
          </Form.Text>
          <Form.Text className="text-center">
            <h3>Login to your account</h3>
          </Form.Text>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control size="sm" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign in
          </Button>
          <Form.Text as="small" className="text-muted my-2">
            Not registered yet? <Link to="/signup">Register</Link>
          </Form.Text>
        </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Signin;
