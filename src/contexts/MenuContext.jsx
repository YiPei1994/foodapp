import { useQuery } from '@chakra-ui/media-query';
import { createContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchLastOrderId } from '../services/apiOrder';

const MenusContext = createContext();

const MenusContextProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchParams] = useSearchParams();

  // Get table and customer ID from URL parameters
  const table = searchParams.get('table');
  const customer = searchParams.get('customer_id');

  // Fetch the last order ID for the specified table
  const { data: orderId, refetch } = useQuery({
    queryKey: ['orders', table],
    queryFn: () => fetchLastOrderId(table),
  });
  const handleAdd = (newItem) => {
    if (!newItem) return;
    const newItemId = newItem.item_id;
    const existedItemIndex = menuItems.findIndex(
      (item) => item.item_id === newItemId,
    );

    if (existedItemIndex !== -1) {
      const updateMenuItems = [...menuItems];
      updateMenuItems[existedItemIndex].quantity += 1;
      setMenuItems(updateMenuItems);
    } else {
      setMenuItems([...menuItems, { ...newItem, quantity: 1 }]);
    }
  };

  const handleDecrease = (id) => {
    if (!id) return;

    const existedItemIndex = menuItems.findIndex((item) => item.item_id === id);

    if (existedItemIndex !== -1) {
      const updateMenuItems = [...menuItems];

      updateMenuItems[existedItemIndex].quantity = Math.max(
        0,
        updateMenuItems[existedItemIndex].quantity - 1,
      );
      setMenuItems(updateMenuItems);
    }
  };

  const totalMenuQuantity = menuItems.reduce(
    (acc, cur) => acc + cur.quantity,
    0,
  );
  const totalMenuPrice = menuItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  return (
    <MenusContext.Provider
      value={{
        menuItems,
        handleAdd,
        handleDecrease,
        totalMenuQuantity,
        totalMenuPrice,
        setMenuItems,
        customer,
        table,
        orderId,
        refetch,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
};

export { MenusContextProvider, MenusContext };
