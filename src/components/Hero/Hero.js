import React from "react";
import { Fade } from "react-reveal";

import HeroImage from "../assets/images/domino.png";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="img-container">
        <Fade right>
          <img src={HeroImage} alt="logo" />
        </Fade>
      </div>
      <div className="main" id="about">
        <h1>Fast.</h1>
        <h1>Beautiful.</h1>
        <h1 className="recipes">Recipes.</h1>
      </div>
    </div>
  );
}

export default Hero;
