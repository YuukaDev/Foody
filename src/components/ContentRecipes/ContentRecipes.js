import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import { Bounce } from "react-reveal";

function ContentRecipes() {
  return (
    <div className="recipes-wrapper">
      <Navigation />
      <Bounce left>
        <div className="recipes-hero">
          <h1 className="hover-text">Foody Recipes</h1>
        </div>
        <div className="form-container">
          <form>
            <input
              type="text"
              autoComplete="off"
              id="recipesInput"
              placeholder="Search for recipe..."
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Bounce>
    </div>
  );
}

export default ContentRecipes;
