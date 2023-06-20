import {Configuration} from 'webpack';
import {isProd} from '../mode';
import cssMinimizerWebpackPlugin from './minimizers/cssMinimizerWebpackPlugin';
import terserWebpackPlugin from './minimizers/terserWebpackPlugin';

export default () => {
  const optimization: Configuration['optimization'] = {
    splitChunks: {
      chunks: 'async',
      minChunks: 2,
      name: false
    },
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`
    }
  };

  if (isProd) {
    optimization.minimize = true;
    optimization.minimizer = [cssMinimizerWebpackPlugin(), terserWebpackPlugin()];
  }

  return optimization;
};
