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
  const totalPrice = items.reduce((acc, cur) => acc + cur.price, 0);
  if (isLoading) return <Spinner />;

  const orderStatus = status[0]?.status;
  return (
    <div className="mt-24 flex h-auto max-h-screen flex-col justify-center  bg-yellow-50 px-4 py-8 ">
      <p className="flex flex-col gap-4 text-center text-2xl">
        {' '}
        <span>Your order number is: {orderId} </span>
        {orderStatus === 'In Progress' && (
          <span className=" rounded-full bg-yellow-400 py-4">
            {orderStatus}
          </span>
        )}
        {orderStatus === 'Cooking' && (
          <span className=" rounded-full bg-amber-400 py-4">{orderStatus}</span>
        )}
        {orderStatus === 'Ready' && (
          <span className=" rounded-full bg-lime-400 py-4">{orderStatus}</span>
        )}
      </p>

      <div className="my-4">
        {items.map((item) => (
          <SingleOrder item={item} key={item.item_id} />
        ))}

        <div className="border-sm-netural-800 mt-5 flex items-center justify-between border-t text-2xl">
          <span className="p-2 font-bold">Total price:</span>
          <span className="p-2 font-bold">{totalPrice} € </span>
        </div>
      </div>
    </div>
  );
}

export default OrderWaitRoom;
