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
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";
import { Fade } from "react-reveal";
import Testing from "../Testing/Testing";

function ContentRecipes() {
  const { onOpen } = useDisclosure();
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
          >
            {recipes.map((recipe, index) => (
              <Fade left>
                <GridItem
                  key={index}
                  onClick={onOpen}
                  style={{
                    width: "300px",
                    height: "300px",
                    marginTop: "50px",
                  }}
                  boxShadow="dark-lg"
                >
                  <Image
                    borderRadius="24px"
                    style={{
                      heigth: "450px",
                      cursor: "pointer",
                      overflow: "hidden",
                      transition: "0.5s all ease",
                    }}
                    src={recipe.recipe.image}
                  />
                  <Box
                    display="flex"
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
                    <Heading
                      mb="20px"
                      textAlign="center"
                      fontSize="1.5em"
                      mt="20px"
                    >
                      {recipe.recipe.label}
                    </Heading>
                    <Testing
                      heading={recipe.recipe.label}
                      cautions={recipe.recipe.cautions}
                    />
                  </Box>
                </GridItem>
              </Fade>
            ))}
          </Grid>
        </Container>
      </HStack>
    </>
  );
}

export default ContentRecipes;
