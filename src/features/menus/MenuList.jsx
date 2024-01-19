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

import ConfirmOrder from '../order/ConfirmOrder';
import { useCreateTable } from '../order/useCreateTable';
import { useQuery } from '@tanstack/react-query';
import { fetchLastOrderId } from '../../services/apiOrder';
import { useDeleteOrder } from '../order/useDeleteOrder';
import { useMenus } from '../../contexts/useMenus';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import MenuSmall from './MenuSmall';
function MenuList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menuItems, customer, table, totalMenuPrice } = useMenus();
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
      <div
        className="rounded-lg bg-lime-400/50 px-6 py-3"
        onClick={handleCreatingTable}
      >
        <AiOutlineShoppingCart className="text-4xl" />
      </div>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Your table is {table} and order number is: {orderId}
          </DrawerHeader>
          <DrawerBody>
            {menuItems.map((menu) => (
              <MenuSmall key={menu.item_id} menu={menu} />
            ))}
            <div className="border-sm-netural-800 mt-5 flex items-center justify-between border-t text-2xl">
              <span className="p-2 font-bold">Total price:</span>
              <span className="p-2 font-bold">{totalMenuPrice} € </span>
            </div>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button
              variant="outline"
              colorScheme="red"
              mr={3}
              onClick={handleClose}
            >
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
