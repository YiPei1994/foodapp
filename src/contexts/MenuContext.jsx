import { createContext, useContext, useState } from 'react';

const MenusContext = createContext();

const MenusContextProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addItem = (newItem) => {
    const itemName = newItem.name;

    if (!newItem) return;

    const itemExistsIndex = orderItems.findIndex(
      (item) => item.name === itemName,
    );

    if (itemExistsIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[itemExistsIndex] = {
        ...updatedOrderItems[itemExistsIndex],
        quantity: updatedOrderItems[itemExistsIndex].quantity + 1,
      };
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, newItem]);
    }
  };
  console.log(orderItems);
  return (
    <MenusContext.Provider value={{ addItem }}>
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
