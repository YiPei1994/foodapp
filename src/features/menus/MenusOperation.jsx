import React from 'react';
import Filter from '../../components/Filter';

function MenusOperation() {
  return (
    <div>
      <Filter
        filterField="type"
        options={[
          { value: 'drink', label: 'Drinks' },
          { value: 'starter', label: 'Starters' },
          { value: 'main', label: 'Main' },
          { value: 'side', label: 'Side' },
          { value: 'dessert', label: 'Dessert' },
        ]}
      />
    </div>
  );
}

export default MenusOperation;
