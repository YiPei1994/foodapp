import React from 'react';
import MenusOperation from './MenusOperation';
import MenusList from './MenusList';
import { useReadMenus } from './useReadMenus';
import { Spinner } from 'flowbite-react';
import { useSearchParams } from 'react-router-dom';

function MenusTable() {
  const { menus, isLoading } = useReadMenus();
  const { searchParams } = useSearchParams();

  if (isLoading)
    return (
      <Spinner
        color="info"
        aria-label="Info spinner example"
        className="text-blue-500"
      />
    );

  const filterValue = searchParams.get('type') || 'all';
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
  console.log(filterValue);
  console.log(filteredMenus);
  return (
    <div>
      <MenusOperation />
      <MenusList />
    </div>
  );
}

export default MenusTable;
