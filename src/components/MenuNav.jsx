import { NavLink } from 'react-router-dom';

function MenuNav() {
  const customerOrders = JSON.parse(localStorage.getItem('customerOrder'));
  const newOrderId = customerOrders?.orderId;
  return (
    <nav>
      <NavLink to="menus"> Menus </NavLink>
      <NavLink to="orders">Orders</NavLink>
      <NavLink to={`orders/${newOrderId}`}>My order</NavLink>
    </nav>
  );
}

export default MenuNav;
