import {RuleSetUseItem} from 'webpack';
import {isDev, isWebPackDevServer} from '../../mode';

export default (): RuleSetUseItem => {
  const presets = [
    ['@babel/preset-env', {loose: true, useBuiltIns: 'usage', corejs: '3.25'}],
    '@babel/preset-react'
    // '@babel/preset-typescript'
  ];

  const plugins = [isDev && isWebPackDevServer && 'react-refresh/babel'].filter(Boolean);

  return {
    loader: 'babel-loader',
    options: {
      presets: presets,
      plugins: plugins
    }
  };
};
