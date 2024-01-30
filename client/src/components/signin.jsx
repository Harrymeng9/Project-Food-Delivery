import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SignIn = () => {
  return (
    <div className='container'>
      <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
        <h2 className="text-center mb-3">Sign In</h2>
        <Form>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
