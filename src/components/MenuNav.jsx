import { Breadcrumb } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

function MenuNav() {
  return (
    <Breadcrumb aria-label="Default breadcrumb">
      <div>
        <HiHome />
        <NavLink to="/"> Home </NavLink>
      </div>

      <Breadcrumb.Item>
        <NavLink to="menus"> Menus </NavLink>
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item>
        <NavLink to="main"> Main course </NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {' '}
        <NavLink to="sides"> Sides </NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {' '}
        <NavLink to="desserts"> Desserts </NavLink>
      </Breadcrumb.Item> */}
    </Breadcrumb>
  );
}

export default MenuNav;
