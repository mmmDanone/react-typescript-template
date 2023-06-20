import React from 'react';
import {useSelector} from '@reduxHooks';
import {increment, decrement, reset} from '@/redux/slices/counter/bindActions';

export const ReduxCounter: React.FC = () => {
  const counter = useSelector((store) => store.counter.value);

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => increment()}>+1</button>
      </div>
    </div>
  );
};
