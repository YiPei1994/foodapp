import { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MenusContext = createContext();

const MenusContextProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [searchParams] = useSearchParams();

  let table = searchParams.get('table') || 1;
  const handleAdd = (newItem) => {
    if (!newItem) return;
    const newItemId = newItem.item_id;
    const existedItemIndex = orderItems.findIndex(
      (item) => item.item_id === newItemId,
    );

    if (existedItemIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existedItemIndex].quantity += 1;
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, { ...newItem, quantity: 1 }]);
    }
  };

  const handleDecrease = (id) => {
    if (!id) return;

    const existedItemIndex = orderItems.findIndex(
      (item) => item.item_id === id,
    );

    if (existedItemIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existedItemIndex].quantity -= 1;
      setOrderItems(updatedOrderItems);
    }
  };

  const totalMenuQuantity = orderItems.reduce(
    (acc, cur) => acc + cur.quantity,
    0,
  );
  const totalMenuPrice = orderItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  return (
    <MenusContext.Provider
      value={{
        orderItems,
        handleAdd,
        handleDecrease,
        totalMenuQuantity,
        totalMenuPrice,
        table,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
};

const useMenus = () => {
  const context = useContext(MenusContext);
  if (context === undefined) {
    console.error('Menus context was used outside MenusContextProvider');
  }

  return context;
};

export { MenusContextProvider, useMenus };
