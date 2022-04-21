import React, { useState, useEffect } from "react";

import {
  Box,
  HStack,
  Container,
  Input,
  Button,
  Image,
  Heading,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";

import axios from "axios";
import { Fade } from "react-reveal";
import ModulPop from "../ModulPop/ModulPop";

function ContentRecipes() {
  const toast = useToast();
  const [recipes, setRecipes] = useState([]);
  const getRecipe = async (query) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=48749e6b&app_key=%20e48b4d118c5df082474141e6e4746f1a`
      );
      setRecipes(response.data.hits);
    } catch (err) {
      console.log(`Error - ${err}`);
    }
  };
  useEffect(() => {
    getRecipe("egg");
  }, []);
  return (
    <>
      <HStack>
        <Container>
          <Box mt="25px">
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                const inputValue = e.target.elements.recipesInput.value;
                if (inputValue.length === 0) {
                  toast({
                    title: "Error",
                    description: "Recipe was not found try again",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  getRecipe(inputValue);
                }
              }}
            >
              <Box display="flex" gap="10px">
                <Input
                  id="recipesInput"
                  placeholder="Search for recipes..."
                  type="text"
                />
                <Button type="submit">Submit</Button>
              </Box>
            </form>
          </Box>
          <Grid
            justifyContent="center"
            alignItems="center"
            gridGap="10"
            templateColumns={{ xl: "repeat(3, 1fr)", sm: "repeat(1, 1fr)" }}
            className="grid-container"
          >
            {recipes.map((recipe, index) => (
              <div key={index}>
                <Fade left>
                  <GridItem
                    style={{
                      width: "300px",
                      height: "300px",
                      marginTop: "50px",
                      marginBottom: "30px",
                    }}
                    boxShadow="dark-lg"
                  >
                    <Image
                      borderRadius="24px"
                      onClick={() => {}}
                      style={{
                        heigth: "450px",
                        transition: "0.5s all ease",
                      }}
                      src={recipe.recipe.image}
                    />
                    <Container
                      justifyContent="center"
                      alignItems="center"
                      color="#fff"
                      borderRadius="6px"
                      height="40px"
                      position="relative"
                      top="2"
                      width="100%"
                      bg="teal.900"
                    >
                      <Heading textAlign="center" fontSize="1.4em" mb="15px">
                        {recipe.recipe.label}
                      </Heading>
                      <ModulPop
                        key={index}
                        heading={recipe.recipe.label}
                        cautions={recipe.recipe.cautions}
                        ingredient={recipe.recipe.ingredientLines}
                        link={recipe.recipe.url}
                      />
                    </Container>
                  </GridItem>
                </Fade>
              </div>
            ))}
          </Grid>
        </Container>
      </HStack>
    </>
  );
}

export default ContentRecipes;
