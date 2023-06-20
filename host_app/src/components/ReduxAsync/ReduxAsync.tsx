import React, {useLayoutEffect, lazy} from 'react';
import {useSelector} from '@reduxHooks';
import {fetchTodo} from '@/redux/slices/todo/bindActions';
import {PageSuspense} from '@/pages/PageSuspense';

// eslint-disable-next-line import/no-unresolved,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const Test = lazy(() => import('test_exp1/Test'));

export const ReduxAsync: React.FC = () => {
  const {todos, isLoading, error} = useSelector((state) => state.todo);

  useLayoutEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      <div>
        <PageSuspense>
          <Test />
        </PageSuspense>
        <hr />
      </div>
      {isLoading && 'Loading data...'}
      {error && error}
      {todos.length > 0 && <pre>{JSON.stringify(todos, null, 2)}</pre>}
      {!isLoading && !error && todos.length === 0 && 'Void'}
    </div>
  );
};
