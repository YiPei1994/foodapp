import React from 'react';
import { useOrders } from './useOrders';

import CustomerTable from './CustomerTableOverview';
import Spinner from '../../components/Spinner';

function OrderTable() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="mx-auto my-5 flex w-4/5 flex-wrap  justify-between gap-2 lg:justify-start">
        {orders.map((order) => (
          <CustomerTable key={order.order_id} order={order} />
        ))}
      </div>
    </>
  );
}

export default OrderTable;
