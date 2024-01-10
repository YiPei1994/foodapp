import { Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import SingleOrder from '../order/SingleOrder';
import { useQuery } from '@tanstack/react-query';
import { getItemsFromOrderId } from '../../services/apiOrder';

function CustomerTable({ order }) {
  const { status, table_id, order_id } = order;

  const [display, setDisplay] = useState();

  const { data: ordered_items, refetch } = useQuery({
    queryKey: ['order_items', order_id],
    queryFn: () => getItemsFromOrderId(order_id),
  });

  const handleClick = () => {
    refetch();
    setDisplay((d) => !d);
  };

  return (
    <>
      <div
        className={`${
          status === 'In Progress' ? 'bg-yellow-400' : ''
        } flex h-32 w-32 flex-col items-center justify-center border border-slate-900 text-slate-50`}
      >
        <Text>table: {table_id}</Text>
        <span>{status} </span>
        <button onClick={handleClick}>Show detail</button>
      </div>
      {display && <SingleOrder items={ordered_items} />}
    </>
  );
}

export default CustomerTable;
