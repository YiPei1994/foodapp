import React from 'react';

function SingleOrder({ item }) {
  const { item_name, price, quantity } = item;

  return (
    <div className="mx-auto my-2 flex w-4/5 items-center  gap-2">
      <span className="w-1/5">{quantity} x</span>
      <p className="w-3/5">{item_name}</p>

      <span className="w-1/5 text-right">{price * quantity} €</span>
    </div>
  );
}

export default SingleOrder;
