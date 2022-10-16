import React, {Suspense, useLayoutEffect} from 'react';
import {NavLink, useRoutes} from 'react-router-dom';
import {useEvent} from '@hooks/useEvent';

import routes from '@/routes';

export const App: React.FC = () => {
  const routesEl = useRoutes(routes);

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

      <Suspense fallback={<h1>Loading page...</h1>}>{routesEl}</Suspense>
    </div>
  );
};
