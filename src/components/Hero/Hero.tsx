import { Heading, Text, HStack, Box } from "@chakra-ui/react";

function Hero() {
  return (
    <>
      <HStack
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        mt="100px"
      >
        <Box>
          <Heading fontSize="4em" size="lg">
            Foodyya
          </Heading>
          <Text size="md" mt="10px" fontSize="1.5em">
            Search for fast and beautfiul recipes
          </Text>
        </Box>
      </HStack>
    </>
  );
}

export default Hero;
