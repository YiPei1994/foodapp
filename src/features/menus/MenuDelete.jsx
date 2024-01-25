import {
  Button,
  ButtonGroup,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  useDisclosure,
  Popover,
} from '@chakra-ui/react';

import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDeleteMenu } from './useDeleteMenu';

function MenuDelete({ id }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { deletingMenu } = useDeleteMenu();
  function handleConfirm() {
    console.log(id);
    if (!id) return;
    deletingMenu(id);
    onClose();
  }
  return (
    <>
      <Button mr={5} colorScheme="red" onClick={onToggle}>
        <FaTrashAlt className="text-yellow-50" />
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={() => onClose()}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleConfirm}>
                Apply
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default MenuDelete;
