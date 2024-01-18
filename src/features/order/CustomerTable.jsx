import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  Drawer,
} from '@chakra-ui/react';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getItemsFromOrderId } from '../../services/apiOrder';
import { useUpdateOrderStatus } from './useUpdateOrderStatus';

function CustomerTable({ order }) {
  const { status, table_id, order_id } = order;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = 'left';
  const statusCooking = 'Cooking';
  const { updatingStatus } = useUpdateOrderStatus();
  const { data: ordered_items, refetch } = useQuery({
    queryKey: ['order_items', order_id],
    queryFn: () => getItemsFromOrderId(order_id),
  });

  function handleClick() {
    refetch();
    onOpen();
  }

  function handlePrint() {
    console.log(order_id, statusCooking);
    if (!order_id) return;
    updatingStatus({ order_id, statusCooking });
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={`${
          status === 'In Progress' ? 'bg-yellow-400' : 'bg-orange-400'
        } flex h-32 w-32 flex-col items-center justify-center border border-slate-900 text-slate-50`}
      >
        <Text>table: {table_id}</Text>
        <span>{status} </span>
      </div>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Menu of table {table_id}{' '}
          </DrawerHeader>
          <DrawerBody>
            {ordered_items?.map((item, i) => (
              <Text
                className="my-2 flex w-full items-center justify-between gap-10"
                key={i}
              >
                <span className="text-bold"> {item.quantity} x</span>
                <span> {item.menu_items.item_type}</span>
                <span> {item.menu_items.item_name}</span>{' '}
              </Text>
            ))}
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={handlePrint}>
              Print
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CustomerTable;
