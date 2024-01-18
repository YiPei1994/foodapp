import { useQuery } from '@tanstack/react-query';
import { getMyOrderStatus } from '../../services/apiOrder';

import { Badge, Spinner } from '@chakra-ui/react';
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
      <p>
        {' '}
        your order id is {orderId}{' '}
        {orderStatus === 'In Progress' && (
          <Badge colorScheme="yellow">{orderStatus}</Badge>
        )}
        {orderStatus === 'Cooking' && (
          <Badge colorScheme="orange">{orderStatus}</Badge>
        )}
        {orderStatus === 'Ready' && (
          <Badge colorScheme="whatsapp">{orderStatus}</Badge>
        )}
      </p>

      <div>
        {items.map((item) => (
          <SingleOrder item={item} key={item.item_id} />
        ))}
      </div>
    </div>
  );
}

export default OrderWaitRoom;
