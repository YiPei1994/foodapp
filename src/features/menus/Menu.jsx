import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useMenus } from '../../contexts/useMenus';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import MenuDetails from './MenuDetails';
import { FaBookOpen } from 'react-icons/fa';

function Menu({ menu }) {
  const { item_id, item_name, price, item_type } = menu;
  const { handleAdd, menuItems, handleDecrease } = useMenus();
  const [displayDetail, setDisplayDetail] = useState(false);

  // Find index and quantity of an existing item
  const existedItemIndex = menuItems.findIndex(
    (item) => item.item_id === item_id,
  );
  const existedItemQuantity = menuItems.find(
    (item) => item.item_id === item_id,
  )?.quantity;

  return (
    <div className="flex w-full flex-col ">
      <div
        className={`text-md mb-2  flex w-full cursor-pointer  items-center justify-between gap-1 rounded-md bg-amber-300/50 px-3  text-neutral-800`}
      >
        <span
          className="flex w-[45%] items-center gap-2 "
          onClick={() => setDisplayDetail((d) => !d)}
        >
          {item_type !== 'drink' && <FaBookOpen />}
          <span className="my-2 block truncate py-4"> {item_name}</span>
        </span>{' '}
        <span className="w-[20%]">{price} €</span>
        {existedItemIndex !== -1 && existedItemQuantity > 0 ? (
          <Box className="flex w-[35%] items-center justify-between gap-4 rounded-xl bg-lime-400/50 px-2 py-2 text-2xl text-yellow-50 ">
            <button onClick={() => handleDecrease(item_id)}>
              <CiCircleMinus className="text-3xl" />
            </button>
            {existedItemQuantity}
            <button onClick={() => handleAdd({ ...menu, quantity: 1 })}>
              <CiCirclePlus className="text-3xl" />
            </button>
          </Box>
        ) : (
          <button
            className="min-h-[48px] w-[35%] rounded-xl bg-lime-400/50 px-6 py-2 text-yellow-50"
            onClick={() => handleAdd({ ...menu, quantity: 1 })}
          >
            Add
          </button>
        )}
      </div>
      <>
        <div>
          {' '}
          <MenuDetails menu={menu} display={displayDetail} />
        </div>
      </>
    </div>
  );
}

export default Menu;
