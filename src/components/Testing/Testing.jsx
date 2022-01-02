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
  Heading,
  Divider,
  Button,
  Text,
} from "@chakra-ui/react";

function Testing({ heading, cautions, ingredient }) {
  const [caution, setCaution] = useState("");
  const [isNone, setNone] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant="ghost" onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
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
              <Text>Cautions - None</Text>
            ) : (
              <Text>Cautions - {cautions.join(", ")}</Text>
            )}
            <Divider bg="white" mb="10px" mt="10px" height="1px" />
            <Text>Ingridient - {ingredient}</Text>
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
