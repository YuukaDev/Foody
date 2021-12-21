import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import { Bounce } from "react-reveal";

function ContentRecipes() {
  return (
    <div className="recipes-wrapper">
      <Navigation />
      <div className="recipes-hero">
        <Bounce left>
          <h1>Search</h1>
          <h1>Beautiful</h1>
          <h1>Recipe.</h1>
        </Bounce>
      </div>
      <div className="content-container"></div>
    </div>
  );
}

export default ContentRecipes;
