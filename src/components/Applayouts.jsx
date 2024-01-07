import { Outlet } from 'react-router-dom';
import MenuNav from './MenuNav';
import Logo from './Logo';
import MenuBusket from './MenuBusket';

function Applayouts() {
  return (
    <div>
      <header>
        <Logo />
        <MenuNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <MenuBusket />
      </footer>
    </div>
  );
}

export default Applayouts;
