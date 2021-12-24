import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import axios from "axios";

import { Bounce } from "react-reveal";

function ContentRecipes() {
  const [open, isOpen] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const getRecipe = async (query) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=48749e6b&app_key=%20e48b4d118c5df082474141e6e4746f1a`
    );
    isOpen(false);
    console.log(response.data.hits);
    setRecipes(response.data.hits);
  };
  return (
    <>
      <Navigation />
      <Bounce left>
        <div className="recipes-hero">
          <h1 className="hover-text">Foody Recipes</h1>
        </div>
        <div className="form-container">
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              const inputValue = e.target.elements.recipesInput.value;
              if (!inputValue) {
                return alert("Please enter recipes");
              } else {
                return getRecipe(inputValue);
              }
            }}
          >
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
      <div className="recipe-content-wrapper">
        {recipes.map((recipe) => (
          <div className="recipes-content-container">
            <div class="recipes-card">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <div class="card-details">
                <p class="tag">{recipe.recipe.dietLabels}</p>
                <h1 class="name">{recipe.recipe.label}</h1>
                <p>{recipe.recipe.ingredientLines}</p>
                <hr />
                <span>Cautions - {recipe.recipe.cautions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContentRecipes;
