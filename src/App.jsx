import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Applayouts from './components/Applayouts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MenusContextProvider } from './contexts/MenuContext';
import Menus from './pages/Menus';
import { ChakraProvider } from '@chakra-ui/react';
import PageNotFound from './pages/PageNotFound';
import Orders from './pages/Orders';
import { Toaster } from 'react-hot-toast';
import OrderWaitRoom from './features/order/OrderWaitRoom';
import { OrderContextProvider } from './contexts/OrderContext';
import Login from './pages/Login';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <div className="custom_bg my_font flex h-screen w-full items-center justify-center text-neutral-800">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MenusContextProvider>
            <OrderContextProvider>
              <ChakraProvider>
                <Routes>
                  <Route element={<Applayouts />}>
                    <Route index element={<Navigate replace to="menus" />} />
                    <Route path="menus" element={<Menus />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="orders/:orderId" element={<OrderWaitRoom />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                  <Route path="login" element={<Login />} />
                </Routes>
                <Toaster
                  position="top-center"
                  gutter={12}
                  containerStyle={{ margin: '8px' }}
                  toastOptions={{
                    sucess: { duration: 3000 },
                    error: { duration: 5000 },
                    style: {
                      fontSize: '16px',
                      maxWidth: '500px',
                      padding: '16px 24px',
                      backgroundColor: '#fff',
                      color: '#000',
                    },
                  }}
                />
              </ChakraProvider>
            </OrderContextProvider>
          </MenusContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
