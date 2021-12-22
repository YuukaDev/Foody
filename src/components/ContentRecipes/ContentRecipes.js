import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import Logo from "../assets/images/domino.png";

import { Bounce } from "react-reveal";

function ContentRecipes() {
  return (
    <div className="recipes-wrapper">
      <Navigation />
      <div className="recipes-hero">
        <Bounce left>
          <h1>Foody Recipes</h1>
        </Bounce>
      </div>
      <div className="content-container"></div>
    </div>
  );
}

export default ContentRecipes;
