import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@/redux/store';
import {App} from '@/components/App';

export const ProvidersLoader: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
