import {configureStore} from '@reduxjs/toolkit';

import counterSlice from './slices/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice
  }
});

export const dispatch = store.dispatch;

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
