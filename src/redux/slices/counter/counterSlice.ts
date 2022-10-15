import {createSlice} from '@reduxjs/toolkit';
import {ICounterState} from './counterTypes';

const initialState: ICounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;