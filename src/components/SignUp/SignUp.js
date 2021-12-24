import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import { Form, Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <Card>
          <Card.Body>
            <h2>Sign Up</h2>
          </Card.Body>
          <Form>
            <Form.Group
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
              className="p-2"
            >
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="email" required />
            </Form.Group>
            <Form.Group
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              className="p-2"
            >
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control id="password" type="password" required />
            </Form.Group>
            <Button
              onClick={register}
              className="btn-danger w-100 mt-3"
              type="button"
            >
              Sign Up
            </Button>
          </Form>
        </Card>
      </Container>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </>
  );
}

export default SignUp;
