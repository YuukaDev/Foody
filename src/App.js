// Components
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Recipes from "./pages/Recipes/Recipes";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </StrictMode>
    </>
  );
}

export default App;
