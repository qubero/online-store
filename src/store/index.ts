import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sortSlice from '../features/sort/sortSlice';
import filtersSlice from '../features/filters/filtersSlice';
import productsSlice from '../features/products/productsSlice';

const sortPersistConfig = { key: 'sort', storage };
const filtersPersistConfig = { key: 'filters', storage };
const productsPersistConfig = { key: 'products', storage };

const rootReducer = combineReducers({
  sort: persistReducer(sortPersistConfig, sortSlice),
  filters: persistReducer(filtersPersistConfig, filtersSlice),
  products: persistReducer(productsPersistConfig, productsSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
