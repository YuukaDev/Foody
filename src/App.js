// Components
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";

import Recipes from "./components/Recipes/Recipes";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
