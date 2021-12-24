import React, { useState } from "react";
import axios from "axios";

import "./Test.css";

import Card from "./components/Card/Card";

function Test() {
  const [recipes, setRecipes] = useState([]);
  const getRecipe = async (query) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=48749e6b&app_key=%20e48b4d118c5df082474141e6e4746f1a`
    );
    console.log(response.data.hits);
    setRecipes(response.data.hits);
  };
  return (
    <div className="test">
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.elements.usernameInput.value;
          if (!username) {
            return alert("Please enter username");
          } else {
            return getRecipe(username);
          }
        }}
      >
        <input
          type="text"
          id="usernameInput"
          placeholder="Enter a username..."
        />
        <button type="submit">Submit</button>
      </form>
      <div className="recipes-wrapper">
        {recipes.map((recipe) => (
          <div class="container">
            <div class="card">
              <div class="card-header">
                <img src={recipe.recipe.image} alt="rover" />
              </div>
              <div class="card-body">
                <span class="tag tag-teal">{recipe.recipe.label}</span>
                <p>{recipe.recipe.ingredientLines}</p>
                <div class="user">
                  <div class="user-info">
                    <h5>{recipe.recipe.cautions}</h5>
                    <small>{recipe.recipe.calories}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
