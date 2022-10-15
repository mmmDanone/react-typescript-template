import React from 'react';
import {Provider} from 'react-redux';
import {App} from '@/components/App';
import {store} from '@/redux/store';

export const ProviderLoaders: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
