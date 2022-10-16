import {lazy} from 'react';
import {RouteObject} from 'react-router-dom';

const Redux = lazy(() => import(/*webpackChunkName: 'redux'*/ '@/pages/Redux'));
const SVGTest = lazy(() => import(/*webpackChunkName: 'svg_test'*/ '@/pages/SVGTest'));

const routes: Array<RouteObject> = [
  {
    index: true,
    element: <Redux />
  },
  {
    path: '/svg_test',
    element: <SVGTest />
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>
  }
];

export default routes;
