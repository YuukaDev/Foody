import { HStack, Heading, Button, Link } from "@chakra-ui/react";
import DarkMode from "../DarkMode/DarkMode";

const Navigation = () => {
  return (
    <HStack
      mt="15px"
      padding="25%"
      justifyContent="space-between"
      alignItems="center"
      py={5}
    >
      <Link
        textDecoration="none"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Heading size="lg">Foody.</Heading>
      </Link>
      <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
        <Link
          transition="0.5s all ease"
          textDecoration="none"
          href="/about"
          _hover={{
            transition: "0.5s all ease",
            transform: "scale(1.1)",
            textDecoration: "none",
          }}
        >
          <Button size="md" variant="ghost">
            About
          </Button>
        </Link>
        <Link
          transition="0.5s all ease"
          textDecoration="none"
          _hover={{
            transition: "0.5s all ease",
            transform: "scale(1.1)",
            textDecoration: "none",
          }}
        >
          <Button size="md" variant="ghost">
            GitHub
          </Button>
        </Link>
        <Link>
          <DarkMode />
        </Link>
      </HStack>
    </HStack>
  );
};

export default Navigation;
