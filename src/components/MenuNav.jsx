import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function MenuNav() {
  const customerOrders = JSON.parse(localStorage.getItem('customerOrder'));
  const newOrderId = customerOrders?.orderId;
  const { isAutenticated } = useCurrentUser();
  return (
    <nav className="m-auto my-4 flex w-auto items-center gap-2 overflow-auto rounded-xl bg-yellow-50 p-4 font-bold">
      <NavLink
        to="menus"
        className={({ isActive }) =>
          isActive
            ? 'rounded-lg bg-yellow-400/75	px-2 py-2 text-lg uppercase tracking-wide text-yellow-50'
            : 'px-2 py-2	text-lg uppercase tracking-wide '
        }
      >
        {' '}
        Menus{' '}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'rounded-lg bg-yellow-400/75	px-2 py-2 text-lg uppercase tracking-wide text-yellow-50'
            : 'px-2 py-2	text-lg uppercase tracking-wide '
        }
        to={newOrderId ? `orders/${newOrderId}` : `/`}
      >
        My order
      </NavLink>

      {isAutenticated && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'rounded-lg bg-yellow-400/75	px-2 py-2 text-lg uppercase tracking-wide text-yellow-50'
              : 'px-2 py-2	text-lg uppercase tracking-wide '
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
