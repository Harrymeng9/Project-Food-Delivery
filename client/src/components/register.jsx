import React from "react";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useMutation, gql } from "@apollo/client";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const INSERT_RESTAURANT_MUTATION = gql`
    mutation InsertRestaurant($input: registerRestaurantInput!) {
      registerRestaurant(input: $input) {
        success
        message
      }
    }
  `;
  const [insertRestaurant] = useMutation(INSERT_RESTAURANT_MUTATION);

  const registerRestaurant = () => {
    insertRestaurant({
      variables: {
        input: {
          name,
          email,
          address,
          city,
          state,
          zipcode: parseInt(zipcode), // Ensure zipcode is parsed to integer
          phone_number,
        },
      },
    })
      .then(({ data }) => {
        // Reset form fields if mutation is successful
        alert("Thanks for registering your restaurant!");
        setName("");
        setEmail("");
        setAddress("");
        setCity("");
        setState("");
        setZipcode("");
        setPhoneNumber("");
      })
      .catch((error) => {
        console.error("Failed to register restaurant:", error.message);
      });
  };

  return (
    <div className="container">
      <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
        <h2 className="text-center mb-3">Register a Restaurant</h2>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="nameInput">Name</Form.Label>
              <Form.Control
                id="nameInput"
                placeholder="Name"
                value={name}
                onChange={(event) => handleInputChange(event, setName)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label htmlFor="emailInput">Email</Form.Label>
              <Form.Control
                id="emailInput"
                placeholder="Email"
                value={email}
                onChange={(event) => handleInputChange(event, setEmail)}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col}>
            <Form.Label htmlFor="addressInput">Address</Form.Label>
            <Form.Control
              id="addressInput"
              placeholder="1234 Main St"
              value={address}
              onChange={(event) => handleInputChange(event, setAddress)}
            />
          </Form.Group>

          <Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="cityInput">City</Form.Label>
              <Form.Control
                id="cityInput"
                placeholder=""
                value={city}
                onChange={(event) => handleInputChange(event, setCity)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="stateInput">State</Form.Label>
              <Form.Control
                id="stateInput"
                placeholder=""
                value={state}
                onChange={(event) => handleInputChange(event, setState)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="zipcodeInput">Zip Code</Form.Label>
              <Form.Control
                id="zipcodeInput"
                placeholder=""
                value={zipcode}
                onChange={(event) => handleInputChange(event, setZipcode)}
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="phoneNumberInput">Phone Number</Form.Label>
            <Form.Control
              id="phoneNumberInput"
              placeholder="xxxxxxxxxx"
              value={phone_number}
              onChange={(event) => handleInputChange(event, setPhoneNumber)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              registerRestaurant();
            }}
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
