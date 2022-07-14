import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../Redux/configureStore';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';

describe('Components Test', () => {
  test('Header Test', () => {
    const store = configureStore;
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('HomePage Test', () => {
    const store = configureStore;
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
