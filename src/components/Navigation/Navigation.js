import React, { useState } from "react";

import Logo from "../assets/images/logo.png";

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <a class="logo" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <nav>
          <ul class="nav__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <a
          class="cta"
          href="https://react-bootstrap.github.io/getting-started/introduction"
        >
          Sign Up
        </a>
        <p class="menu cta" onClick={() => setOpen(!open)}>
          <i class="fas fa-bars"></i>
        </p>
      </header>
      <div className={!open ? "overlay" : "overlay overlay--active"}>
        <a class="close" onClick={() => setOpen(!open)}>
          &times;
        </a>
        <div className="overlay__content">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Recipes</a>
          <a href="#">Contact</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;

//font-family: 'Puppies Play', cursive;
