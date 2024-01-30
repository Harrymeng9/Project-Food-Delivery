import React from "react";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updateFirstName = () => {
    setFirstName(event.target.value);
  };

  const updateLastName = () => {
    setLastName(event.target.value);
  };

  const updatePassword = () => {
    setPassword(event.target.value);
  };

  const updateConfirmPassword = () => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
        <h2 className="text-center mb-3">Create an Account</h2>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Form.Group>
          </Row>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control placeholder="Confirm Password" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
