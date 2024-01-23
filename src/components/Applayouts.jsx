import { Outlet } from 'react-router-dom';
import MenuNav from './MenuNav';
import Logo from './Logo';
import MenuBusket from '../features/menus/MenuBusket';

import SignOut from '../features/Auth/SignOut';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function Applayouts() {
  const { isAutenticated } = useCurrentUser();
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <header className="flex flex-wrap items-center justify-between p-4">
        <Logo />
        {isAutenticated && <SignOut />}
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
