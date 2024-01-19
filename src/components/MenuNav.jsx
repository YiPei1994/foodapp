import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function MenuNav() {
  const customerOrders = JSON.parse(localStorage.getItem('customerOrder'));
  const newOrderId = customerOrders?.orderId;
  const { isAutenticated } = useCurrentUser();
  return (
    <nav className="flex w-full items-center gap-2 rounded-xl bg-yellow-200/25 p-4 font-bold">
      <NavLink
        className=" px-4 py-2	text-2xl uppercase tracking-wide text-yellow-50"
        to="menus"
      >
        {' '}
        Menus{' '}
      </NavLink>
      {!isAutenticated && (
        <NavLink
          className="text-2xl uppercase tracking-wide	text-yellow-50	"
          to={`orders/${newOrderId}`}
        >
          My order
        </NavLink>
      )}

      {isAutenticated && (
        <NavLink
          className="text-2xl uppercase tracking-wide	text-yellow-50	"
          to="orders"
        >
          Orders
        </NavLink>
      )}
    </nav>
  );
}

export default MenuNav;
