import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import {ProvidersLoader} from './ProvidersLoader';

const Redux = lazy(() => import(/*webpackChunkName: 'redux'*/ '@/pages/Redux'));
const ReduxAsync = lazy(() => import(/*webpackChunkName: 'redux_async'*/ '@/pages/ReduxAsync'));
const SVGTest = lazy(() => import(/*webpackChunkName: 'svg_test'*/ '@/pages/SVGTest'));
const Calendar = lazy(() => import(/*webpackChunkName: 'calendar'*/ '@/pages/Calendar'));
const CalendarW = lazy(() => import(/*webpackChunkName: 'calendar_w'*/ '@/pages/CalendarW'));
const CalendarS = lazy(() => import(/*webpackChunkName: 'calendar_s'*/ '@/pages/CalendarS'));
const CalendarR = lazy(() => import(/*webpackChunkName: 'calendar_r'*/ '@/pages/CalendarR'));
const CalendarM = lazy(() => import(/*webpackChunkName: 'calendar_m'*/ '@/pages/CalendarM'));

const routes = createBrowserRouter([
  {
    element: <ProvidersLoader />,
    children: [
      {
        path: '/',
        element: <Redux />
      },
      {
        path: '/redux-async',
        element: <ReduxAsync />
      },
      {
        path: '/svg-test',
        element: <SVGTest />
      },
      {
        path: '/calendar',
        element: <Calendar />,
        children: [
          {
            path: '',
            element: <CalendarW />
          },
          {
            path: 'single',
            element: <CalendarS />
          },
          {
            path: 'range',
            element: <CalendarR />
          },
          {
            path: 'multiple',
            element: <CalendarM />
          }
        ]
      },
      {
        path: '*',
        element: <h1>404 Not Found</h1>
      }
    ]
  }
]);

export default routes;
