import React from 'react';
import MenuList from './MenuList';
import { useMenus } from '../../contexts/useMenus';

function MenuBasket() {
  const { totalMenuQuantity, totalMenuPrice } = useMenus();

  if (!totalMenuQuantity || !totalMenuPrice) {
    return null;
  }

  const hasItemsInBasket = totalMenuQuantity > 0 && totalMenuPrice > 0;

  return (
    <div
      className={`text-md relative flex  items-center gap-5 bg-yellow-200/25 px-6 py-4 transition-all duration-500 ${
        hasItemsInBasket
          ? 'bottom-0 h-auto opacity-100'
          : 'bottom-[-100px] h-0 opacity-0'
      }`}
    >
      <p>
        You have{' '}
        <span className="mx-2 text-xl font-bold text-neutral-900">
          {' '}
          {totalMenuQuantity} items
        </span>{' '}
        in your basket with a total amount of{' '}
        <span className="mx-2 text-xl font-bold"> {totalMenuPrice} € </span>
      </p>
      <MenuList />
    </div>
  );
}

export default MenuBasket;
