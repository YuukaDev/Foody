import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

import { Form, Button, Card, Container, FormLabel } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const registerUser = async () => {
    if (registerEmail === "" && registerPassword === "") {
      alert("no");
    } else {
      try {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <div style={{ backgroundColor: "#0a0a0b" }}>
      <Navigation />
      <Container
        style={{
          marginTop: "100px",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <Card
          style={{ width: "28rem", backgroundColor: "#2a4d69" }}
          className="p-5"
        >
          <Card.Body>
            <h2 className="fs-1 text-light">Login</h2>
          </Card.Body>
          <Form>
            <Form.Group className="p-2">
              <Form.Label className="fs-4 text-light" htmlFor="email" required>
                Username
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
                autoComplete="off"
                id="username"
                type="text"
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label className="fs-4 text-light" htmlFor="email" required>
                Email
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
                autoComplete="off"
                id="email"
                type="email"
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label
                className="fs-4 text-light"
                htmlFor="password"
                required
              >
                Password
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
                autoComplete="off"
                id="password"
                type="password"
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#4b86b4",
                outline: "none",
                border: "none",
                width: "100%",
              }}
              onClick={registerUser}
              className="mt-3"
              type="button"
            >
              Sign Up
            </Button>
          </Form>
          <div className="mt-3 text-center text-light">
            Already have an account?
            <a
              style={{ color: "#72b2e2", textDecoration: "none" }}
              href="/login"
            >
              {" "}
              Login
              <br />
            </a>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
