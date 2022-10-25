import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ITodo} from './todoTypes';
import {name} from './sliceName';

const fetchTodoPrefix = name<'fetchTodo'>('fetchTodo');

export const fetchTodo = createAsyncThunk(fetchTodoPrefix, async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  } catch (error) {
    return rejectWithValue('OPS... ERROR...');
  }
});
