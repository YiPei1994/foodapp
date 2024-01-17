import { useQuery } from '@tanstack/react-query';
import { getMyOrderStatus } from '../../services/apiOrder';

import { Spinner } from '@chakra-ui/react';
import SingleOrder from './SingleOrder';

function OrderWaitRoom() {
  const customerOrders = JSON.parse(localStorage?.getItem('customerOrder'));
  const { orderId, items } = customerOrders || {};

  const { data: status, isLoading } = useQuery({
    queryKey: ['orders', orderId],
    queryFn: () => getMyOrderStatus(orderId),
  });

  if (isLoading) return <Spinner />;
  console.log(items);
  const orderStatus = status[0].status;
  return (
    <div>
      your order id is {orderId}
      <div>
        {/*      {items.map((item) => (
          <SingleOrder key={item.item_id} item={item} />
        ))} */}
      </div>
    </div>
  );
}

export default OrderWaitRoom;
