import React, { createContext, useState } from 'react';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [newOrderItems, setNewOrderItems] = useState([]);

  return (
    <OrderContext.Provider value={{ newOrderItems, setNewOrderItems }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContextProvider, OrderContext };
