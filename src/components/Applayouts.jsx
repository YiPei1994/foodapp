import { Outlet } from 'react-router-dom';
import MenuNav from './MenuNav';
import Logo from './Logo';
import MenuBusket from '../features/menus/MenuBusket';
import { Container } from '@chakra-ui/react';

function Applayouts() {
  return (
    <Container>
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
    </Container>
  );
}

export default Applayouts;
