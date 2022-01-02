import React, { useState } from "react";

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
} from "@chakra-ui/react";

import axios from "axios";
import { Fade } from "react-reveal";
import ModulPop from "../ModulPop/ModulPop";

function ContentRecipes() {
  const [recipes, setRecipes] = useState([]);
  const getRecipe = async (query) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=48749e6b&app_key=%20e48b4d118c5df082474141e6e4746f1a`
      );
      console.log(response.data.hits);
      setRecipes(response.data.hits);
    } catch {
      console.log("ne");
    }
  };
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
                if (!inputValue) {
                  return alert("no");
                } else {
                  return getRecipe(inputValue);
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
            templateColumns="repeat(3, 1fr)"
            className="grid-wrapper"
          >
            {recipes.map((recipe, index) => (
              <>
                <Fade left>
                  <GridItem
                    className="grid-item"
                    key={index}
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
                        heading={recipe.recipe.label}
                        cautions={recipe.recipe.cautions}
                        ingredient={recipe.recipe.ingredientLines}
                      />
                    </Container>
                  </GridItem>
                </Fade>
              </>
            ))}
          </Grid>
        </Container>
      </HStack>
    </>
  );
}

export default ContentRecipes;
