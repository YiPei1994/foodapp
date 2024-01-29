import { Outlet, useNavigate } from 'react-router-dom';
import MenuNav from './MenuNav';
import Logo from './Logo';
import MenuBusket from '../features/menus/MenuListOverview';

import SignOut from '../features/Auth/SignOut';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function Applayouts() {
  const { isAutenticated } = useCurrentUser();
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full  flex-col overflow-hidden">
      <header className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-4">
        <div className="flex w-full justify-between px-4">
          <Logo />
          {!isAutenticated && (
            <button onClick={() => navigate('/login')}>Log In</button>
          )}
          {isAutenticated && <SignOut />}
        </div>
        <MenuNav />
      </header>
      <main className="mb-5 overflow-y-scroll">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <MenuBusket />
      </footer>
    </div>
  );
}

export default Applayouts;
