import React from 'react';
import { useOrders } from './useOrders';
import { Spinner } from '@chakra-ui/react';
import CustomerTable from '../tables/CustomerTable';

function OrderTable() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Spinner />;

  return (
    <div className="my-5 flex w-full flex-wrap gap-5">
      {orders.map((order) => (
        <CustomerTable key={order.order_id} order={order} />
      ))}
    </div>
  );
}

export default OrderTable;
