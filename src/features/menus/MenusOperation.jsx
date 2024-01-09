import React from 'react';
import Filter from '../../components/Filter';

function MenusOperation() {
  return (
    <Filter
      filterField="types"
      options={[
        { value: 'drink', label: 'Drinks' },
        { value: 'starter', label: 'Starters' },
        { value: 'main', label: 'Main' },
        { value: 'side', label: 'Side' },
        { value: 'dessert', label: 'Dessert' },
      ]}
    />
  );
}

export default MenusOperation;
