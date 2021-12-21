// Components
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";

import ContentRecipes from "./components/ContentRecipes/ContentRecipes";
import Test from "./Test";

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
          <Route path="/recipes" element={<ContentRecipes />} />
          <Route path="/testing" element={<Test />} />
        </Routes>
      </StrictMode>
    </>
  );
}

export default App;
