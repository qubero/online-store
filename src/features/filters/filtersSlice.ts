import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { ActiveFilters, Filters } from './types';

export const initialState: ActiveFilters = {
  activeFilters: {
    color: [],
    price: [0, 20],
    name: [],
    amount: [0, 500],
    pairs: [],
    favourite: [],
    brand: [],
    onlyNew: [],
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilters: <K extends keyof Filters>(
      state: ActiveFilters,
      action: {
        type: string;
        payload: { type: K; value: Filters[K] };
      },
    ) => {
      const { type, value } = action.payload;
      state.activeFilters[type] = value;
    },
    resetFilters: () => initialState,
    clearFilters: () => {
      storage.removeItem('persist:filters');
    },
  },
});

export const { setActiveFilters, resetFilters, clearFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
