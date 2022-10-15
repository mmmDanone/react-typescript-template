import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {ProviderLoaders} from './ProviderLoaders';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <ProviderLoaders />
  </React.StrictMode>
);
