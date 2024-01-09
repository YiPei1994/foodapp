import { Text } from '@chakra-ui/react';
import React from 'react';

function CustomerTable({ order }) {
  const { status, table_id } = order;

  return (
    <div
      className={`${
        status === 'In Progress' ? 'bg-yellow-400' : ''
      } flex h-32 w-32 flex-col items-center justify-center border border-slate-900 text-slate-50`}
    >
      <Text>table: {table_id}</Text>
      <span>{status} </span>{' '}
    </div>
  );
}

export default CustomerTable;
