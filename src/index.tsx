import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {ProvidersLoader} from './ProvidersLoader';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <ProvidersLoader />
  </React.StrictMode>
);
