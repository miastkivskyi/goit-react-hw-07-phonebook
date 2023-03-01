import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './slice';
import { filterReducer } from './filter';

export const store = configureStore({
  reducer: {
    contacts: UserReducer,
    filter: filterReducer,
  },
});
