import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';
import { useMenus } from '../../contexts/MenuContext';
import Menu from './Menu';
import ConfirmBtn from '../../components/ConfirmBtn';
function MenuList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { orderItems, table } = useMenus();

  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your table is {table}</Text>
            {orderItems.map((menu) => (
              <Menu key={menu.item_id} menu={menu} />
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <ConfirmBtn />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default MenuList;
