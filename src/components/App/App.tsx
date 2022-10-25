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
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '15px'
          }}
        >
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/redux_async">async</NavLink>
          </li>
          <li>
            <NavLink to="/svg_test">Test SVG</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
