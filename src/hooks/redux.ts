import { AnyAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, persistor, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatchWithReset = () => {
  const dispatch = useAppDispatch();

  return (action: AnyAction) => {
    persistor.pause();
    dispatch(action);
    persistor.purge();
    persistor.persist();
  };
};
