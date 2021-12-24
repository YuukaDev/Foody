import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/style.css";

import App from "./App";
import Recipes from "./pages/Recipes/Recipes";
import Test from "./Test";
import SignUp from "./components/SignUp/SignUp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/testing" element={<Test />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
