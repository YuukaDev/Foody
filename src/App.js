// Components
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Recipes from "./components/Recipes/Recipes";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Main />
        <About />
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
