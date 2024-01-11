import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal,
} from '@chakra-ui/react';

import { useCreateNewItem } from './useCreateNewItems';
import { useNavigate } from 'react-router-dom';
import { useContextOrders } from '../../contexts/useContextOrders';
import { useMenus } from '../../contexts/useMenus';
import { useQuery } from '@tanstack/react-query';
import { fetchLastOrderId } from '../../services/apiOrder';

function ConfirmOrder({ type, table, error, isError }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menuItems, setMenuItems } = useMenus();
  const { setNewOrderItems, newOrderItems, setNewOrderId } = useContextOrders();
  const { creatingNewItems } = useCreateNewItem();

  const { data: orderId } = useQuery({
    queryKey: ['orders', table],
    queryFn: () => fetchLastOrderId(table),
  });
  console.log(orderId);
  const navigate = useNavigate();

  function createNewOrderItems(items) {
    if (orderId === undefined) return;

    const newOrderItem = items.map((item) => ({
      order_id: orderId,
      quantity: item.quantity,
      item_id: item.item_id,
    }));

    setNewOrderItems([...newOrderItems, ...newOrderItem]);
  }

  function handleCreatingTable() {
    if (!table || !orderId) return;
    onOpen();
    createNewOrderItems(menuItems);
    setNewOrderId(orderId);
  }

  function handleSubmit() {
    if (newOrderItems.length === 0) return;
    creatingNewItems(newOrderItems, {
      onSuccess: () => {
        setMenuItems([]);
        onClose();
        navigate(`/orders/${orderId}`);
      },
    });
  }
  return (
    <>
      <Button onClick={handleCreatingTable}>Confirm {type}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!isError ? `Are you sure to make this ${type}? ` : error.message}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {!isError && (
              <Button onClick={handleSubmit} colorScheme="green">
                {type}
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmOrder;
