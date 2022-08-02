import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import sourceData from '../../sourceData';
import { ActiveProducts } from './types';

export const initialState: ActiveProducts = {
  products: sourceData,
  cart: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateFavourites: (state, action) => {
      const idx = state.products.findIndex((el) => el.id === action.payload);
      state.products[idx].favourite = !state.products[idx].favourite;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const idx = state.cart.findIndex((id) => id === action.payload);

      if (idx > -1) {
        state.cart.splice(idx, 1);
      }
    },
    resetProducts: () => initialState,
    clearProducts: () => {
      storage.removeItem('persist:products');
    },
  },
});

export const {
  updateFavourites,
  addToCart,
  removeFromCart,
  resetProducts,
  clearProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
