import React from 'react';
import {useSelector, useDispatch} from '@reduxHooks';
import {increment, decrement} from '@/redux/slices/counter/counterSlice';

export const ReduxCounter: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.value);

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
      </div>
    </div>
  );
};
