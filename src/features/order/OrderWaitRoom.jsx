import { useQuery } from '@tanstack/react-query';
import { getMyOrderStatus } from '../../services/apiOrder';

import { Container, Spinner } from '@chakra-ui/react';
import SingleOrder from './SingleOrder';

function OrderWaitRoom() {
  const customerOrders = JSON.parse(localStorage?.getItem('customerOrder'));
  const { orderId, items } = customerOrders || {};

  const { data: status, isLoading } = useQuery({
    queryKey: ['orders', orderId],
    queryFn: () => getMyOrderStatus(orderId),
  });
  const totalPrice = items.reduce((acc, cur) => acc + cur.price, 0);
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

  const orderStatus = status[0]?.status;
  return (
    <Container>
      <div className="mt-24 flex h-auto max-h-screen flex-col justify-center  rounded-xl bg-yellow-50 px-4 py-8 ">
        <p className="flex flex-col gap-4 text-center text-2xl">
          {' '}
          <span>Your order number is: {orderId} </span>
          {orderStatus === 'In Progress' && (
            <span className=" m-auto w-3/5 rounded-full bg-yellow-500 py-4 text-yellow-50">
              {orderStatus}
            </span>
          )}
          {orderStatus === 'Cooking' && (
            <span className=" m-auto w-3/5 rounded-full bg-orange-500  py-4 text-yellow-50">
              {orderStatus}
            </span>
          )}
          {!orderStatus && (
            <span className=" m-auto w-3/5 rounded-full bg-lime-500  py-4 text-yellow-50">
              Done
            </span>
          )}
        </p>

        <div className="my-4">
          {items.map((item) => (
            <SingleOrder item={item} key={item.item_id} />
          ))}

          <div className="border-sm-netural-800 mt-10 flex items-center justify-between border-t text-2xl">
            <span className="p-2 font-bold">Total price:</span>
            <span className="p-2 font-bold">{totalPrice} € </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OrderWaitRoom;
