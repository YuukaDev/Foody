import React, { useState } from "react";
import {
  Box,
  Text,
  HStack,
  Container,
  Input,
  Button,
  Image,
  Heading,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  Grid,
  GridItem,
  List,
  ListItem,
  OrderedList,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";
import Imager from "../assets/images/domino.png";
import "./ContentRecipes.css";

function ContentRecipes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            onClick={onOpen}
          >
            {recipes.map((recipe, index) => (
              <GridItem
                key={index}
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
                </Box>
                <Modal bg="transparent" size="lg" isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <Heading>{recipe.recipe.label}</Heading>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>Cautions - {recipe.recipe.cautions}</Text>
                      <Text>Diet - {recipe.recipe.dietLabels}</Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </HStack>
    </>
  );
}

export default ContentRecipes;
