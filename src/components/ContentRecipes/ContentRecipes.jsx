import React, { useState, useEffect } from "react";

import {
  Box,
  HStack,
  Container,
  Input,
  Button,
  Grid,
  Text,
  useToast,
} from "@chakra-ui/react";

import axios from "axios";
import ContentItem from "./ContentItem";

function ContentRecipes() {
  const toast = useToast();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getRecipe = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=48749e6b&app_key=%20e48b4d118c5df082474141e6e4746f1a`
      );
      setRecipes(response.data.hits);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      setError(err.message);
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
                <Text>{error}</Text>
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
              <div>
                {loading ? (
                  <h1>Loading...</h1>
                ) : (
                  <ContentItem index={index} {...recipe} />
                )}
              </div>
            ))}
          </Grid>
        </Container>
      </HStack>
    </>
  );
}

export default ContentRecipes;
