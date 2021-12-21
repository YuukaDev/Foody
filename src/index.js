import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/style.css";

import App from "./App";
import ContentRecipes from "./components/ContentRecipes/ContentRecipes";
import Test from "./Test";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipes" element={<ContentRecipes />} />
      <Route path="/testing" element={<Test />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
