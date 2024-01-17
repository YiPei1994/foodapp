import React from 'react';
import MenuList from './MenuList';
import { useMenus } from '../../contexts/useMenus';

function MenuBasket() {
  const { totalMenuQuantity, totalMenuPrice } = useMenus();

  const hasItemsInBasket = totalMenuQuantity > 0 && totalMenuPrice > 0;

  return (
    hasItemsInBasket && (
      <div>
        <p>
          You have {totalMenuQuantity} items in your menu basket with a total
          amount of {totalMenuPrice} €
        </p>
        <MenuList />
      </div>
    )
  );
}

export default MenuBasket;
