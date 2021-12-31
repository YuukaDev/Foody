import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Text,
} from "@chakra-ui/react";

function Testing({ heading, cautions }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={() => {
          alert("yo");
        }}
      >
        Click
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Heading>{heading}</Heading>
          <ModalCloseButton />
          <ModalBody>
            <Text>{cautions}</Text>
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
