import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Register = () => {
  return (
    <div className="container">
      <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
        <h2 className="text-center mb-3">Register a Restaurant</h2>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Company Name</Form.Label>
              <Form.Control placeholder="Company Name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Company Email</Form.Label>
              <Form.Control placeholder="Company Email" />
            </Form.Group>
          </Row>

          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
