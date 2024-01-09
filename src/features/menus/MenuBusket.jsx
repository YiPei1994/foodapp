import React from 'react';
import { useMenus } from '../../contexts/MenuContext';
import MenuList from './MenuList';

function MenuBasket() {
  const { totalMenuQuantity, totalMenuPrice } = useMenus();

  return (
    <>
      {totalMenuQuantity > 0 && totalMenuPrice > 0 && (
        <div>
          <p>
            You have {totalMenuQuantity} items in your menu basket with a total
            amount of {totalMenuPrice} €
          </p>
          <MenuList />
        </div>
      )}
    </>
  );
}

export default MenuBasket;
