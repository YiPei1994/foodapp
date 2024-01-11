import React, { useEffect } from 'react';
import { useContextOrders } from '../../contexts/useContextOrders';
import { useQuery } from '@tanstack/react-query';
import { getItemsFromOrderId } from '../../services/apiOrder';

function OrderWaitRoom() {
  const { newOrderId } = useContextOrders();
  console.log(newOrderId);
  const { data: ordered_items, refetch } = useQuery({
    queryKey: ['order_items', newOrderId],
    queryFn: () => getItemsFromOrderId(newOrderId),
  });

  useEffect(() => {
    refetch();
  }, []);
  console.log(ordered_items);
  return <div>OrderWaitRoom</div>;
}

export default OrderWaitRoom;
