import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import HomePage from '../components/HomePage';

describe('rendering test', () => {
  it('renders', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/home' }]}>
          <HomePage />
        </MemoryRouter>
      </Provider>,
    );
    const cityList = [
      'Amsterdam',
      'Istanbul',
      'London',
      'New York',
      'Seoul',
      'Singapore',
      'Sydney',
    ];
    await waitFor(() => {
      const cityNames = screen.getAllByTestId('city-name');
      cityNames.forEach((cityEl) => {
        expect(cityList.includes(cityEl.textContent)).toBeTruthy();
      });
    });
  });
});
