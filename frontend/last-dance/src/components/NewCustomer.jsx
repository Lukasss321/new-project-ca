import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NewCustomer = () => {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h1>Please enter customer's details</h1>
      <Form>
        <Form.Group>
          <Form.Label>Enter client's first name:</Form.Label>
          <Form.Control type="text" placeholder="Enter client's first name:" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter client's last name:</Form.Label>
          <Form.Control type="text" placeholder="Enter  client's last name:" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter phone number:</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Click here to add client
        </Button>
      </Form>
    </div>
  );
};
