import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import {ProvidersLoader} from './ProvidersLoader';
import {PageSuspense} from './pages/PageSuspense';

const Redux = lazy(() => import(/*webpackChunkName: 'redux'*/ '@/pages/Redux'));
const SVGTest = lazy(() => import(/*webpackChunkName: 'svg_test'*/ '@/pages/SVGTest'));

const routes = createBrowserRouter([
  {
    element: <ProvidersLoader />,
    children: [
      {
        index: true,
        element: (
          <PageSuspense>
            <Redux />
          </PageSuspense>
        )
      },
      {
        path: '/svg_test',
        element: (
          <PageSuspense>
            <SVGTest />
          </PageSuspense>
        )
      },
      {
        path: '*',
        element: <h1>404 Not Found</h1>
      }
    ]
  }
]);

export default routes;
