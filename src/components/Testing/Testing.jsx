import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  List,
  ListItem,
  UnorderedList,
  Divider,
  Button,
  Text,
} from "@chakra-ui/react";

function Testing({ heading, cautions, ingredient }) {
  const [isNone, setNone] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant="ghost" onClick={onOpen}>
        Open Modal
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
            {cautions == isNone ? (
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Testing;
