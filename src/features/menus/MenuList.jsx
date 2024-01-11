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

import { useSearchParams } from 'react-router-dom';
import ConfirmOrder from '../order/ConfirmOrder';
import { useCreateTable } from '../order/useCreateTable';
import { useQuery } from '@tanstack/react-query';
import { fetchLastOrderId } from '../../services/apiOrder';
import { useDeleteOrder } from '../order/useDeleteOrder';
import { useMenus } from '../../contexts/useMenus';

function MenuList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menuItems } = useMenus();
  const { creatingTable, error, isError } = useCreateTable();
  const { deletingOrder } = useDeleteOrder();
  const [searchParams] = useSearchParams();

  const placement = 'right';
  const table = searchParams.get('table');
  const { data: orderId, refetch } = useQuery({
    queryKey: ['orders', table],
    queryFn: () => fetchLastOrderId(table),
  });

  function handleCreatingTable() {
    if (!table) return;
    onOpen();
    creatingTable(table);
    refetch(table);
  }

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

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Your table is {table} and order number is : {orderId}
          </DrawerHeader>
          <DrawerBody>
            {menuItems.map((menu) => (
              <Menu key={menu.item_id} menu={menu} />
            ))}
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <ConfirmOrder
              table={table}
              type="order"
              error={error}
              isError={isError}
              orderItems={menuItems}
              orderId={orderId}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuList;
