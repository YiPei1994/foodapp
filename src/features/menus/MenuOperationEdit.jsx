import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { HiMiniPencilSquare } from 'react-icons/hi2';

import CreateMenuForm from './CreateMenuForm';

function MenuEdit({ menu }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        <HiMiniPencilSquare className="text-yellow-50" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateMenuForm onClose={onClose} menu={menu} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MenuEdit;
