import {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '@/redux/store';
import {App} from '@/components/App';

export const ProvidersLoader: FC = () => {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
};
