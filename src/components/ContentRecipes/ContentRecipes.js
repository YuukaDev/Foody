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
          <h1 className="hover-text">Foody Recipes</h1>
        </Bounce>
      </div>
      <div className="form-container">
        <form>
          <input
            type="text"
            id="recipesInput"
            placeholder="Enter a username..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContentRecipes;
