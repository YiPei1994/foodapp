import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function MenuNav() {
  const customerOrders = JSON.parse(localStorage.getItem('customerOrder'));
  const newOrderId = customerOrders?.orderId;
  const { isAutenticated } = useCurrentUser();
  return (
    <nav>
      <NavLink to="menus"> Menus </NavLink>
      {!isAutenticated && (
        <NavLink to={`orders/${newOrderId}`}>My order</NavLink>
      )}

      {isAutenticated && <NavLink to="orders">Orders</NavLink>}
    </nav>
  );
}

export default MenuNav;
