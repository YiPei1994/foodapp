import { NavLink } from 'react-router-dom';

function MenuNav() {
  return (
    <nav>
      <NavLink to="menus"> Menus </NavLink>
      <NavLink to="orders">Orders</NavLink>
    </nav>
  );
}

export default MenuNav;
