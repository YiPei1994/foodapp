import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applayouts from './components/Applayouts';
import Drinks from './pages/Drinks';
import Desserts from './pages/Desserts';
import Sides from './pages/Sides';
import Main from './pages/Main';
import Welcome from './pages/Welcome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        path: '/drinks',
        element: <Drinks />,
      },
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: '/sides',
        element: <Sides />,
      },
      {
        path: '/desserts',
        element: <Desserts />,
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
