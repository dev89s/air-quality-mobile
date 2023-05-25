import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navbar header test', () => {
  it('should show Current Weather', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/home' }]}>
        <Navigation />
      </MemoryRouter>,
    );
    const title = screen.queryByRole('heading');
    expect(title.textContent).toBe('Current Weather');
  });

  it('should show New York', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/city/New-York' }]}>
        <Navigation />
      </MemoryRouter>,
    );
    const title = screen.queryByRole('heading');
    expect(title.textContent).toBe('City/New York');
  });
});

describe('Navbar header test', () => {
  it('should stay the same', () => {
    const nav = renderer.create(
      <MemoryRouter initialEntries={[{ pathname: '/home' }]}>
        <Navigation />
      </MemoryRouter>,
    );
    const tree = nav.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
