import React, { useState } from "react";

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <a class="logo" href="/">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <nav>
          <ul class="nav__links">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a class="cta" href="#">
          Contact
        </a>
        <p class="menu cta">Menu</p>
      </header>
      <div className={!open ? "overlay" : "overlay--active"}>
        <a class="close" onClick={() => setOpen(!open)}>&times;</a>
        <div className="overlay__content">
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;

//font-family: 'Puppies Play', cursive;
