import React from 'react';
import {
  useDisclosure,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Drawer,
} from '@chakra-ui/react';

import Menu from './Menu';

import ConfirmOrder from '../order/ConfirmOrder';
import { useCreateTable } from '../order/useCreateTable';
import { useQuery } from '@tanstack/react-query';
import { fetchLastOrderId } from '../../services/apiOrder';
import { useDeleteOrder } from '../order/useDeleteOrder';
import { useMenus } from '../../contexts/useMenus';

function MenuList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menuItems, customer, table } = useMenus();
  const { creatingTable, error, isError } = useCreateTable();
  const { deletingOrder } = useDeleteOrder();

  // Fetch the last order ID for the specified table
  const { data: orderId, refetch } = useQuery({
    queryKey: ['orders', table],
    queryFn: () => fetchLastOrderId(table),
  });

  // Function to handle creating a new table and opening the drawer
  function handleCreatingTable() {
    if (!table) return;
    onOpen();
    creatingTable({ table, customer });
    refetch(table);
  }

  // Function to handle closing the drawer and deleting the order if exists
  function handleClose() {
    onClose();
    if (!orderId) return;
    deletingOrder(table);
  }

  return (
    <>
      <Button colorScheme="blue" onClick={handleCreatingTable}>
        Create Order
      </Button>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Your table is {table} and order number is: {orderId}
          </DrawerHeader>
          <DrawerBody>
            {/* Render menu items */}
            {menuItems.map((menu) => (
              <Menu key={menu.item_id} menu={menu} />
            ))}
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={handleClose}>
              Cancel
            </Button>
            {/* ConfirmOrder component with relevant props */}
            <ConfirmOrder type="order" error={error} isError={isError} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuList;
