import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import store from '../redux/store';
import City, { cityName } from '../components/City';

describe('render test', () => {
  it('renders properly', async () => {
    const routes = [
      {
        path: '/city/:cityName',
        element: <City />,
        loader: cityName,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/city/New-York'],
    });

    act(() => {
      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>,
      );
    });

    await waitFor(() => {
      const CarbonMonixide = screen.getByText('CO (Carbon monixide)');
      expect(CarbonMonixide).toBeInTheDocument();
    });
  });
  it('renders properly', async () => {
    const routes = [
      {
        path: '/city/:cityName',
        element: <City />,
        loader: cityName,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/city/New-York'],
    });

    act(() => {
      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>,
      );
    });

    await waitFor(() => {
      const NitrogenMooixide = screen.getByText(/Nitrogen monoxide/i);
      expect(NitrogenMooixide).toBeInTheDocument();
    });
  });
});
