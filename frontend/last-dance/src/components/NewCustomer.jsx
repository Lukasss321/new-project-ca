import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    alert("Customer's contact has been successfully added!");
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h1>Please enter customer's details</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>Enter client's full name:</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Enter client's full name:"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter client's e-mail address:</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="text"
            type="email"
            placeholder="Enter client's e-mail address:"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter email address:</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="image"
            type="phone"
            placeholder="Enter client's phone number"
          />
        </Form.Group>
        <Button onClick={handleOnSubmit} variant="primary" type="submit">
          Click here to add client
        </Button>
      </Form>
    </div>
  );
};
