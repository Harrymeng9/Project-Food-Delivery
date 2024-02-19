import React from "react";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updateFirstName = () => {
    setFirstName(event.target.value);
  };

  const updateLastName = () => {
    setLastName(event.target.value);
  };

  const updateEmail = () => {
    setEmail(event.target.value);
  };

  const updatePassword = () => {
    setPassword(event.target.value);
  };

  const updateConfirmPassword = () => {
    setConfirmPassword(event.target.value);
  };

  const createUser = (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    // to store the user info into the database

    if (password !== confirmPassword) {
      alert("Password doesn't match. Please correct it. ");
    } else {
      // axios.get('/', ( ) => {
      console.log("err");
      // })
    }
  };

  return (
    <div className="container">
      <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
        <h2 className="text-center mb-3">Create an Account</h2>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={updateFirstName}
                placeholder="First name"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control onChange={updateLastName} placeholder="Last name" />
            </Form.Group>
            {/* <div>test: {lastName}</div> */}
          </Row>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={updateEmail}
              type="email"
              placeholder="Enter email"
            />
            {/* <div>test: {email}</div> */}
          </Form.Group>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={updatePassword} placeholder="Password" />
            </Form.Group>
            {/* <div>test: {password}</div> */}

            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={updateConfirmPassword}
                placeholder="Confirm Password"
              />
              {/* <div>test: {confirmPassword}</div> */}
            </Form.Group>
          </Row>
          <Button onClick={createUser} variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
