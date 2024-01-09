import React from 'react';
import MenusOperation from './MenusOperation';
import { useReadMenus } from './useReadMenus';

import { useSearchParams } from 'react-router-dom';
import Menu from './Menu';
import { Container, Spinner } from '@chakra-ui/react';

function MenusTable() {
  const [searchParams] = useSearchParams();
  const { menus, isLoading } = useReadMenus();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('types') || 'drink';

  let filteredMenus;

  if (filterValue === 'drink')
    filteredMenus = menus.filter((menu) => menu.item_type === 'drink');
  if (filterValue === 'starter')
    filteredMenus = menus.filter((menu) => menu.item_type === 'starter');
  if (filterValue === 'main')
    filteredMenus = menus.filter((menu) => menu.item_type === 'main');
  if (filterValue === 'side')
    filteredMenus = menus.filter((menu) => menu.item_type === 'side');
  if (filterValue === 'dessert')
    filteredMenus = menus.filter((menu) => menu.item_type === 'dessert');

  return (
    <Container>
      <MenusOperation />
      <div>
        {filteredMenus.map((menu) => (
          <Menu key={menu.item_id} menu={menu} />
        ))}
      </div>
    </Container>
  );
}

export default MenusTable;
