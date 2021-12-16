import React, { useState } from "react";

function Navigation() {
  const [open, isOpen] = useState(true);

  return (
    <nav className="navigation-wrapper">
      <div className="navigation-container">
        <div className="logo-wrapper">
          <a href="../App.js">
            <h1>Hello</h1>
          </a>
        </div>
        <ul className="navigation-items">
          <li>
            <a href="#about">Home</a>
          </li>
          <li>
            <a href="#projects">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#" className="sign-in">
              <button>Sign In</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
