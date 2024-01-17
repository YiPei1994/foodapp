import React from 'react';

function SingleOrder({ item }) {
  return (
    <div>
      <div key={item.menu_items.item_id}>
        <p>{item.menu_items.item_name}</p>
        <p>{item.quantity}</p>
      </div>
    </div>
  );
}

export default SingleOrder;
