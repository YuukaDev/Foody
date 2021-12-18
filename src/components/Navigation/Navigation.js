import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <div
      style={{
        backgroundColor: "#474554",
        fontFamily: "Ubuntu",
      }}
    >
      <Navbar className="p-3">
        <Container>
          <Nav style={{ gap: "10px", fontSize: "1.5em" }}>
            <Nav.Link
              href="#home"
              style={{ transition: "0.5s all ease", color: "#ACA7CB" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{ transition: "0.5s all ease", color: "#ACA7CB" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#recipes"
              style={{ transition: "0.5s all ease", color: "#ACA7CB" }}
            >
              Recipes
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ transition: "0.5s all ease", color: "#ACA7CB" }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav style={{ fontSize: "1.5em" }}>
            <Nav.Link
              className="justify-content-end"
              style={{
                transition: "0.5s all ease",
                color: "#ACA7CB",
              }}
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;

//font-family: 'Puppies Play', cursive;
