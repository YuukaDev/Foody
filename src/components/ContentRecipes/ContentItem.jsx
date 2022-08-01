import { Container, GridItem, Heading, Image } from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ModulPop from "../ModulPop/ModulPop";

export default function ContentItem({ index, recipe }) {
  return (
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
            src={recipe.image}
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
  );
}
