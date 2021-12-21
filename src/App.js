// Components
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";

//import Recipes from "./components/Recipes/Recipes";

import { Routes, Route } from "react-router-dom";
import React, { StrictMode } from "react";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
      </div>
      <StrictMode>
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </StrictMode>
    </>
  );
}

export default App;

function Recipes() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
