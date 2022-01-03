import { HStack, Heading, Button, Link } from "@chakra-ui/react";
import DarkMode from "../DarkMode/DarkMode";

const Navigation = () => {
  return (
    <div className="navigation-container">
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
            href="https://twitter.com/yuukasuoh"
            target="_blank"
            _hover={{
              transition: "0.5s all ease",
              transform: "scale(1.1)",
              textDecoration: "none",
            }}
          >
            <Button size="md" variant="ghost">
              Twitter
            </Button>
          </Link>
          <Link
            transition="0.5s all ease"
            textDecoration="none"
            href="https://github.com/YuukaDev"
            target="_blank"
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
    </div>
  );
};

export default Navigation;
