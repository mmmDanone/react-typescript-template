import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import {ProvidersLoader} from './ProvidersLoader';
import {PageSuspense} from './pages/PageSuspense';

const Redux = lazy(() => import(/*webpackChunkName: 'redux'*/ '@/pages/Redux'));
const ReduxAsync = lazy(() => import(/*webpackChunkName: 'redux_async'*/ '@/pages/ReduxAsync'));
const SVGTest = lazy(() => import(/*webpackChunkName: 'svg_test'*/ '@/pages/SVGTest'));

const routes = createBrowserRouter([
  {
    element: <ProvidersLoader />,
    children: [
      {
        path: '/',
        element: (
          <PageSuspense>
            <Redux />
          </PageSuspense>
        )
      },
      {
        path: '/redux-async',
        element: (
          <PageSuspense>
            <ReduxAsync />
          </PageSuspense>
        )
      },
      {
        path: '/svg-test',
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
