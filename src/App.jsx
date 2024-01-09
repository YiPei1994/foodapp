import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Applayouts from './components/Applayouts';
import Welcome from './pages/Welcome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MenusContextProvider } from './contexts/MenuContext';
import Menus from './pages/Menus';
import { ChakraProvider } from '@chakra-ui/react';
import PageNotFound from './pages/PageNotFound';
import Orders from './pages/Orders';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <MenusContextProvider>
            <Routes>
              <Route element={<Applayouts />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Welcome />} />
                <Route path="menus" element={<Menus />} />
                <Route path="orders" element={<Orders />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </MenusContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
