import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#474554",
        fontFamily: "Ubuntu",
      }}
    >
      <Navbar className="p-3">
        <Container>
          <Nav style={{ gap: "10px", fontSize: "1.5em" , color: "#ACA7CB" }}>
            <Nav.Link href="#about" style={{ transition: "0.5s all ease" }}>
              About
            </Nav.Link>
            <Nav.Link href="#contact" style={{ transition: "0.5s all ease" }}>
              Recipes
            </Nav.Link>
            <Nav.Link className="foodie">
              Foody
            </Nav.Link>
            <Nav.Link href="#contact" style={{ transition: "0.5s all ease" }}>
              Contact
            </Nav.Link>
            <Nav.Link style={{ transition: "0.5s all ease" }}>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;

//font-family: 'Puppies Play', cursive;
