import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './slices/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
