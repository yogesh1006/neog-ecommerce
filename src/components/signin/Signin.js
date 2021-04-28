import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container ,Col} from "react-bootstrap";
import {signin} from './signinapicall/index'

const Signin = () => {

  const [values, setValues]=useState({
    email:"",
    password:"",
});
 
   const handleChange=name=>event=>{

     setValues({...values,[name]:event.target.value})
   }

   const onSubmit=e=>{
      e.preventDefault()
      setValues({...values})
      signin(values)
      .then(res => console.log("df",res.message))
      setValues(
        {
          email:"",
          password:"",
      }
      )
   }

  return (
    <div>
      <Container >
        <Col>
        <Form >
          <Form.Text className="text-center">
            <h3>WELCOME BACK</h3>
          </Form.Text>
          <Form.Text className="text-center">
            <h3>Login to your account</h3>
          </Form.Text>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control size="sm" name="email" value={values.email} type="email" placeholder="Enter email" onChange={handleChange("email")} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" name="password" value={values.password} type="password" placeholder="Password" onChange={handleChange("password")}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onSubmit}>
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
