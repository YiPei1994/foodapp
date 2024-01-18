import React from 'react';

function SingleOrder({ item }) {
  const { item_name, price, description, quantity } = item;

  return (
    <div>
      <div>
        <span>{quantity} x</span>
        <p>{item_name}</p>
        <p>{description}</p>
        <span>{price * quantity}</span>
      </div>
    </div>
  );
}

export default SingleOrder;
