import { useContext } from 'react';
import { OrderContext } from './OrderContext';

export const useContextOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    console.error('OrderContext was used outside OrderContextProvider');
  }

  return context;
};
