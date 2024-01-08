import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applayouts from './components/Applayouts';

import Welcome from './pages/Welcome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MenusContextProvider } from './contexts/MenuContext';
import Menus from './pages/Menus';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayouts />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/menus',
        element: <Menus />,
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenusContextProvider>
        <RouterProvider router={router} />
      </MenusContextProvider>
    </QueryClientProvider>
  );
}

export default App;
