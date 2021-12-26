import React, { useState } from "react";

import Logo from "../assets/images/logo.png";

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <a className="logo" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a
          className="cta"
          href="/signup"
        >
          Sign Up
        </a>
        <p className="menu cta" onClick={() => setOpen(!open)}>
          <i className="fas fa-bars"></i>
        </p>
      </header>
      <div className={!open ? "overlay" : "overlay overlay--active"}>
        <a className="close" onClick={() => setOpen(!open)}>
          <i className="fas fa-times"></i>
        </a>
        <div className="overlay__content">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#recipes">Recipes</a>
          <a href="#cotact">Contact</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
