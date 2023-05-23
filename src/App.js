import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import City, { cityName } from './components/City';
import HomePage from './components/HomePage';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: cityName,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/city/:cityName',
        element: <City />,
        loader: cityName,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
