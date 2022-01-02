import React from "react";

import { Container, Box, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="5em"
      height="10vh"
    >
      <Box>
        <Text as="em">Made By </Text>
        <Link
          _hover={{
            textDecoration: "none",
          }}
          href="https://github.com/YuukaDev"
        >
          Yuuka ❤️
        </Link>
      </Box>
    </Container>
  );
}

export default Footer;
