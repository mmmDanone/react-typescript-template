import React, {useLayoutEffect} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import {useEvent} from '@hooks/useEvent';

export const App: React.FC = () => {
  const event = useEvent((a: number, b: number) => {
    return a + b;
  });

  const res = event(555, 333);

  useLayoutEffect(() => {
    console.log(res);
  });

  return (
    <div>
      <div>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/svg_test">Test</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
