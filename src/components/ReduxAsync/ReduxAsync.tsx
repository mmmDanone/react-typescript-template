import React, {useLayoutEffect} from 'react';
import {useSelector} from '@reduxHooks';
import {fetchTodo} from '@/redux/slices/todo/bindActions';

export const ReduxAsync: React.FC = () => {
  const {todos, isLoading, error} = useSelector((state) => state.todo);

  useLayoutEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      {isLoading && 'Loading data...'}
      {error && error}
      {todos.length > 0 && <pre>{JSON.stringify(todos, null, 2)}</pre>}
      {!isLoading && !error && todos.length === 0 && 'Void'}
    </div>
  );
};
