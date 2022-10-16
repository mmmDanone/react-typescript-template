import {configureStore} from '@reduxjs/toolkit';

import counterSlice from './slices/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice
  }
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
