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
    <div style={{ backgroundColor: "#0a0a0b" }}>
      <Container
        style={{
          height: "100vh",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <Card
          style={{ width: "28rem", backgroundColor: "#2a4d69" }}
          className="p-5"
        >
          <Card.Body>
            <h2 className="fs-1 text-light">Sign Up</h2>
          </Card.Body>
          <Form>
            <Form.Group
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
              className="p-2"
            >
              <Form.Label className="fs-4 text-light" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control
                autoComplete="off"
                id="email"
                type="email"
                required
              />
            </Form.Group>
            <Form.Group
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              className="p-2"
            >
              <Form.Label className="fs-4 text-light" htmlFor="password">
                Password
              </Form.Label>
              <Form.Control
                autoComplete="off"
                id="password"
                type="password"
                required
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#4b86b4",
                outline: "none",
                border: "none",
                width: "100%",
              }}
              onClick={register}
              className="mt-3"
              type="button"
            >
              Sign Up
            </Button>
          </Form>
          <div className="mt-3 text-center text-light">
            Already have an account?{" "}
            <a
              style={{ color: "#e7eff6", textDecoration: "none" }}
              href="/login"
            >
              Login
            </a>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default SignUp;
