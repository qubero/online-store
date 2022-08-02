/**
 * @jest-environment jsdom
 */

import reducer, {
  addToCart,
  initialState,
  removeFromCart,
} from '../features/products/productsSlice';
import { ActiveProducts } from '../features/products/types';
import data from '../sourceData';

describe('test products slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle a product being added to an empty cart', () => {
    const previousState: ActiveProducts = initialState;

    expect(reducer(previousState, addToCart('someId'))).toEqual({
      products: data,
      cart: ['someId'],
    });
  });

  it('should handle a product being removed from a cart', () => {
    const previousState: ActiveProducts = {
      products: initialState.products,
      cart: ['someId'],
    };

    expect(reducer(previousState, removeFromCart('someId'))).toEqual(initialState);
  });
});
