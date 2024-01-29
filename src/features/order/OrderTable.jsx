import React from 'react';
import { useOrders } from './useOrders';
import { Spinner } from '@chakra-ui/react';
import CustomerTable from './CustomerTableOverview';

function OrderTable() {
  const { orders, isLoading } = useOrders();

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

  return (
    <>
      <div className="mx-auto my-5 flex w-4/5 flex-wrap justify-between gap-2 lg:justify-start">
        {orders.map((order) => (
          <CustomerTable key={order.order_id} order={order} />
        ))}
      </div>
    </>
  );
}

export default OrderTable;
