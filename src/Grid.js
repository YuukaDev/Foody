import React from "react";
import {
  Box,
  SimpleGrid,
  Container,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";

function Grid() {
  return (
    <>
      <SimpleGrid textAlign="center" columns={4} spacing="8px">
        <Container
          padding={6}
          border={`1px solid lightgrey`}
          boxShadow={`0 5px 5px 0 rgba(0,0,0,0.15)`}
          borderRadius={3}
        >
          <Box bg="tomato" height="350px">
            <Image
              margin="0 auto"
              height="250px"
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
            />
            <Heading>Beef</Heading>
            <Text>Hello World</Text>
          </Box>
        </Container>
        <Container
          padding={6}
          border={`1px solid lightgrey`}
          textAlign="center"
          boxShadow={`0 5px 5px 0 rgba(0,0,0,0.15)`}
          borderRadius={3}
        >
          <Box bg="tomato" height="80px">
            <Image
              margin="0 auto"
              height="250px"
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
            />
            <Heading>Beef</Heading>
            <Text>Hello World</Text>
          </Box>
        </Container>
        <Container
          padding={6}
          border={`1px solid lightgrey`}
          textAlign="center"
          boxShadow={`0 5px 5px 0 rgba(0,0,0,0.15)`}
          borderRadius={3}
        >
          <Box bg="tomato" height="80px">
            <Image
              margin="0 auto"
              height="250px"
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
            />
            <Heading>Beef</Heading>
            <Text>Hello World</Text>
          </Box>
        </Container>
        <Container
          padding={6}
          border={`1px solid lightgrey`}
          textAlign="center"
          boxShadow={`0 5px 5px 0 rgba(0,0,0,0.15)`}
          borderRadius={3}
        >
          <Box bg="tomato" height="80px">
            <Image
              margin="0 auto"
              height="250px"
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
            />
            <Heading>Beef</Heading>
            <Text>Hello World</Text>
          </Box>
        </Container>
      </SimpleGrid>
    </>
  );
}

export default Grid;
