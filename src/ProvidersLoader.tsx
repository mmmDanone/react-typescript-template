import React from 'react';
import {Provider} from 'react-redux';
import {App} from '@/components/App';
import {store} from '@/redux/store';
import {BrowserRouter} from 'react-router-dom';

export const ProvidersLoader: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
