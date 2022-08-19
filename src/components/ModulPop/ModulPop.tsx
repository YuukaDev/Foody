import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ListItem,
  UnorderedList,
  Divider,
  Button,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";

function ModulPop({ heading, cautions, ingredient, link }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button colorScheme="cyan" variant="outline" mt="10px" onClick={onOpen}>
        Click For More Information
      </Button>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            style={{
              fontSize: "2em",
              textAlign: "center",
            }}
          >
            {heading}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!cautions.length ? (
              <Text
                style={{
                  fontSize: "1.5em",
                }}
              >
                Cautions - None
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: "1.5em",
                }}
              >
                Cautions - {cautions.join(", ")}
              </Text>
            )}
            <Divider bg="teal" mb="10px" mt="10px" height="2px" />
            <Text
              style={{
                fontSize: "1.5em",
              }}
            >
              Ingridients :
            </Text>
            <UnorderedList>
              <ListItem>{ingredient[0]}</ListItem>
              <ListItem>{ingredient[1]}</ListItem>
              <ListItem>{ingredient[2]}</ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              <Link
                target="_blank"
                _hover={{
                  textDecoration: "none",
                }}
                href={link}
              >
                Open Link
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ModulPop;
