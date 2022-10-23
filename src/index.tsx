import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Router} from './Router';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
