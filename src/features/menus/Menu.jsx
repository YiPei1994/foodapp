import { Box, Button, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useMenus } from '../../contexts/MenuContext';

function Menu({ menu }) {
  const { item_id, item_name, price, description } = menu;
  const { handleAdd, orderItems, handleDecrease } = useMenus();

  const existedItemIndex = orderItems.findIndex(
    (item) => item.item_id === item_id,
  );
  let existedItemQuantity = orderItems.find(
    (item) => item.item_id === item_id,
  )?.quantity;

  return (
    <Container className="flex flex-wrap">
      <Text>
        <span>{item_name} </span> <span>{price} € </span>
      </Text>
      <Text>{description} </Text>
      {existedItemIndex !== -1 && existedItemQuantity > 0 ? (
        <Box>
          <button onClick={() => handleDecrease(item_id)}>-</button>
          {existedItemQuantity}
          <button onClick={() => handleAdd({ ...menu, quantity: 1 })}>+</button>
        </Box>
      ) : (
        <Button onClick={() => handleAdd({ ...menu, quantity: 1 })}>Add</Button>
      )}
    </Container>
  );
}

export default Menu;