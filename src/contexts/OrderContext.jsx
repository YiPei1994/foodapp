import React, { createContext, useState } from 'react';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [newOrderItems, setNewOrderItems] = useState([]);
  const [newOrderId, setNewOrderId] = useState(0);

  return (
    <OrderContext.Provider
      value={{ newOrderItems, setNewOrderItems, newOrderId, setNewOrderId }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContextProvider, OrderContext };
