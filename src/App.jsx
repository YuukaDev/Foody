import React, { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";

import { ChakraProvider, ThemeProvider, theme } from "@chakra-ui/react";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import ContentRecipes from "./components/ContentRecipes/ContentRecipes";
import About from "./components/About/About";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <Navigation />
          <Hero />
          <ContentRecipes />
        </ChakraProvider>
      </ThemeProvider>
      <StrictMode>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </StrictMode>
    </>
  );
}

export default App;
