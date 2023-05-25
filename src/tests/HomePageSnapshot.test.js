import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import HomePage from '../components/HomePage';

describe('snapshot test', () => {
  it('stays the same', () => {
    const homePage = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/home' }]}>
          <HomePage />
        </MemoryRouter>
      </Provider>,
    );
    const tree = homePage.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
