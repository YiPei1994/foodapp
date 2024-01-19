import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { useMenus } from '../../contexts/useMenus';
function MenuSmall({ menu }) {
  console.log(menu);
  const { item_id, item_name, price, quantity } = menu || {};
  const { handleAdd, menuItems, handleDecrease } = useMenus();

  const existedItemQuantity = menuItems.find(
    (item) => item.item_id === item_id,
  )?.quantity;

  const totalPricePerMenu = price * quantity;
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex w-[60%] justify-between gap-6">
        <span>{item_name}</span>
        <span> {totalPricePerMenu ? `${totalPricePerMenu} €` : ''} </span>
      </div>
      <div className="flex items-center gap-4 text-xl">
        <CiCircleMinus
          className="text-3xl"
          onClick={() => handleDecrease(item_id)}
        />
        <span>{existedItemQuantity} </span>
        <CiCirclePlus
          className="text-3xl"
          onClick={() => handleAdd({ ...menu, quantity: 1 })}
        />
      </div>
    </div>
  );
}

export default MenuSmall;
