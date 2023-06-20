import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITodoState, ITodo} from './todoTypes';
import {fetchTodo} from './asyncActions';
import {name} from './sliceName';

const initialState: ITodoState = {
  todos: [],
  isLoading: true,
  error: ''
};

export const todoSlice = createSlice({
  name: name(),
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchTodo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTodo.rejected.type]: (state, acton: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = acton.payload;
    },
    [fetchTodo.fulfilled.type]: (state, acton: PayloadAction<Array<ITodo>>) => {
      state.isLoading = false;
      state.error = '';
      state.todos = acton.payload;
    }
  }
});

export const actions = todoSlice.actions;
