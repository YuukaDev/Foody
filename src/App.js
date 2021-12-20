// Components
import Header from "./pages/Header/Header";
import About from "./components/About/About";
import Recipes from "./components/Recipes/Recipes";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <About />
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
