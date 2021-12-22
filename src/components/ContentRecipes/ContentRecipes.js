import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import { Bounce } from "react-reveal";

function ContentRecipes() {
  const searchRecipes = async (query) => {
    let res = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=48749e6b&app_key=%20e48b4d118c5df082474141e6e4746f1a`
    );
    let random = await res.json();
    console.log(random.hits[0]);
  };
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
