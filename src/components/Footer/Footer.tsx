import { Container, Box, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="10vh"
      mt="80px"
    >
      <Box>
        <Text as="em">Made By </Text>
        <Link
          _hover={{
            textDecoration: "none",
          }}
          href="https://www.vukcode.rs/"
        >
          Yuuka ❤️
        </Link>
      </Box>
    </Container>
  );
}

export default Footer;
