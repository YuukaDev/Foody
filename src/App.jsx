import React from "react";
//import { Routes, Route } from "react-router-dom";

import { ChakraProvider, ThemeProvider, theme } from "@chakra-ui/react";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import ContentRecipes from "./components/ContentRecipes/ContentRecipes";
import Footer from "./components/Footer/Footer";
//import About from "./components/About/About";

function App() {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <ChakraProvider>
            <Navigation />
            <Hero />
            <ContentRecipes />
            <Footer />
          </ChakraProvider>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
