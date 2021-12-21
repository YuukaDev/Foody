import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

function ContentRecipes() {
  return (
    <div className="recipes-wrapper">
      <Navigation />
      <div className="main">
        <h1>Search</h1>
        <h1>Your</h1>
        <h1>Recipes.</h1>
      </div>
      <div className="content-container"></div>
    </div>
  );
}

export default ContentRecipes;
