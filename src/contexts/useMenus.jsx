import { useContext } from 'react';
import { MenusContext } from './MenuContext';

export const useMenus = () => {
  const context = useContext(MenusContext);
  if (context === undefined) {
    console.error('Menus context was used outside MenusContextProvider');
  }

  return context;
};
