import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export const NewCustomer = () => {
  const [form, setForm] = useState({
    title: "",
    text: "",
    image: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form, //image:       //YrasytasTekstas Image
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/post", form)
      .then((response) => console.log("successfull response", response))
      .catch((err) => console.group("err", err));
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h1>Please enter customer's details</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>Enter client's first name:</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Enter client's first name:"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter client's last name:</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Enter  client's last name:"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter email address:</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="text"
            type="email"
            placeholder="Enter your email address"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter phone number:</Form.Label>
          <Form.Control
            // onChange={handleChange}
            // name="phone"
            type="number"
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Click here to add client
        </Button>
      </Form>
    </div>
  );
};
