import {configureStore} from '@reduxjs/toolkit';

import {counterSlice} from './slices/counter/counterSlice';
import {todoSlice} from './slices/todo/todoSlice';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [todoSlice.name]: todoSlice.reducer
  }
});

export const dispatch = store.dispatch;

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
