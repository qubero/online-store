import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { SortTypes } from '../../constants';

export const initialState = {
  activeSort: SortTypes.BRAND_A,
  searchString: '',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setActiveSort: (state, action) => {
      state.activeSort = action.payload;
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    resetSort: () => initialState,
    clearSort: () => {
      storage.removeItem('persist:sort');
    },
  },
});

export const { setActiveSort, setSearchString, resetSort, clearSort } =
  sortSlice.actions;
export default sortSlice.reducer;
