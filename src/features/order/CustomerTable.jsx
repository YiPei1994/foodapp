import {
  Button,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getItemsFromOrderId } from '../../services/apiOrder';
import { useUpdateOrderStatus } from './useUpdateOrderStatus';
import { MdTableBar } from 'react-icons/md';
import { useDeleteOrder } from './useDeleteOrder';

function CustomerTable({ order }) {
  const { status, table_id, order_id } = order;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deletingOrder } = useDeleteOrder();
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
    if (!order_id) return;
    updatingStatus({ order_id, statusCooking });
  }

  function handleDeleteFinishedOrder() {
    if (!order_id) return;
    onClose();
    deletingOrder(order_id);
  }
  return (
    <>
      <div
        onClick={handleClick}
        className={`${
          status === 'In Progress' ? 'bg-yellow-400' : 'bg-lime-500'
        } flex h-32 w-32 flex-col items-center justify-center gap-4  rounded-lg  text-2xl text-yellow-50`}
      >
        <MdTableBar className="text-6xl" />

        <Text>Table: {table_id}</Text>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Menu of table {table_id} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              className="mr-auto"
              onClick={handleDeleteFinishedOrder}
            >
              Delete
            </Button>
            <Button variant="outline" mr={4} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={handlePrint}>
              Print
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomerTable;
