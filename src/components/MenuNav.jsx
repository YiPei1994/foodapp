import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function MenuNav() {
  const customerOrders = JSON.parse(localStorage.getItem('customerOrder'));
  const newOrderId = customerOrders?.orderId;
  const { isAutenticated } = useCurrentUser();
  return (
    <nav className="flex w-full items-center gap-2 rounded-xl bg-yellow-50 p-4 font-bold">
      <NavLink
        to="menus"
        className={({ isActive }) =>
          isActive
            ? 'rounded-lg bg-yellow-400/75	px-4 py-2 text-xl uppercase tracking-wide text-yellow-50'
            : 'px-4 py-2	text-xl uppercase tracking-wide '
        }
      >
        {' '}
        Menus{' '}
      </NavLink>
      {!isAutenticated && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'rounded-lg bg-yellow-400/75	px-4 py-2 text-xl uppercase tracking-wide text-yellow-50'
              : 'px-4 py-2	text-xl uppercase tracking-wide '
          }
          to={`orders/${newOrderId}`}
        >
          My order
        </NavLink>
      )}

      {isAutenticated && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'rounded-lg bg-yellow-400/75	px-4 py-2 text-xl uppercase tracking-wide text-yellow-50'
              : 'px-4 py-2	text-xl uppercase tracking-wide '
          }
          to="orders"
        >
          Orders
        </NavLink>
      )}
    </nav>
  );
}

export default MenuNav;
