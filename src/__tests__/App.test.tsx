/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { initialState } from '../features/products/productsSlice';
import App from '../components/App';

afterEach(cleanup);

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('With React Testing Library', () => {
  window.ResizeObserver = ResizeObserver;

  it('Shows first product', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(initialState.products[0].name)).not.toBeNull();
  });
});
