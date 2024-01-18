import { Outlet } from 'react-router-dom';
import MenuNav from './MenuNav';
import Logo from './Logo';
import MenuBusket from '../features/menus/MenuBusket';
import { Container } from '@chakra-ui/react';

import SignOut from '../features/Auth/SignOut';
import { useCurrentUser } from '../features/Auth/useCurrentUser';

function Applayouts() {
  const { isAutenticated } = useCurrentUser();
  return (
    <Container>
      <header>
        <Logo />
        <MenuNav />
        {isAutenticated && <SignOut />}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <MenuBusket />
      </footer>
    </Container>
  );
}

export default Applayouts;
