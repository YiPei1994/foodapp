import React, { useEffect } from 'react';
import MenusOperation from './MenusOperation';
import { useReadMenus } from './useReadMenus';
import { useSearchParams } from 'react-router-dom';
import Menu from './SingleMenu';
import {
  Container,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Modal,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import CreateMenuForm from './CreateMenuForm';
import { useCurrentUser } from '../Auth/useCurrentUser';
import { CiCirclePlus } from 'react-icons/ci';

function MenusTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { menus, isLoading } = useReadMenus();
  const { isAutenticated } = useCurrentUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setSearchParams(new URLSearchParams({ table: 3, customer_id: uuidv4() }));
  }, []);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
      />
    );

  const filterValue = searchParams.get('types') || 'drink';

  let filteredMenus;

  if (filterValue === 'drink')
    filteredMenus = menus.filter((menu) => menu.item_type === 'drink');
  if (filterValue === 'starter')
    filteredMenus = menus.filter((menu) => menu.item_type === 'starter');
  if (filterValue === 'main')
    filteredMenus = menus.filter((menu) => menu.item_type === 'main');
  if (filterValue === 'side')
    filteredMenus = menus.filter((menu) => menu.item_type === 'side');
  if (filterValue === 'dessert')
    filteredMenus = menus.filter((menu) => menu.item_type === 'dessert');

  return (
    <Container className="relative flex w-full flex-col gap-6">
      <MenusOperation />
      <div className="flex flex-col gap-4 ">
        {filteredMenus.map((menu) => (
          <Menu key={menu.item_id} menu={menu} />
        ))}
      </div>
      {isAutenticated && (
        <>
          {' '}
          <button
            className="fixed bottom-10 right-10 rounded-full bg-yellow-50 p-2"
            onClick={onOpen}
          >
            <CiCirclePlus className="text-4xl" />
          </button>
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create a new Menu</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <CreateMenuForm onClose={onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </Container>
  );
}

export default MenusTable;
