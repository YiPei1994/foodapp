import { Outlet } from 'react-router-dom';
import MenuNav from './MenuNav';
import Logo from './Logo';
import MenuBusket from '../features/menus/MenuBusket';

import SignOut from '../features/Auth/SignOut';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function Applayouts() {
  const { isAutenticated } = useCurrentUser();
  return (
    <div className="flex h-screen w-full  flex-col overflow-hidden">
      <header className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-4">
        <div className="flex w-full justify-between">
          <Logo />
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
