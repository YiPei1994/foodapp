import { NavLink } from 'react-router-dom';

function MenuNav() {
  return (
    <nav>
      <NavLink to="drinks"> Drinks </NavLink>
      <NavLink to="main"> Main course </NavLink>
      <NavLink to="sides"> Sides </NavLink>
      <NavLink to="desserts"> Desserts </NavLink>
    </nav>
  );
}

export default MenuNav;
