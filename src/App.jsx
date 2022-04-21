import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/theme";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import ContentRecipes from "./components/ContentRecipes/ContentRecipes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <React.StrictMode>
        <ChakraProvider theme={customTheme}>
          <Navigation />
          <Hero />
          <ContentRecipes />
          <Footer />
        </ChakraProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
