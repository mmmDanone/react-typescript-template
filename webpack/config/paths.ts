import path from 'path';
const __dirname = path.resolve();
import getIP from './assets/getIP';

export default <const>{
  root: __dirname,
  publicURL: '',
  mainEntry: path.resolve(__dirname, 'src/index.tsx'),
  srcPath: path.resolve(__dirname, 'src'),
  publicPath: path.resolve(__dirname, 'public'),
  tplHTML: path.resolve(__dirname, 'public/index.html'),
  output: path.resolve(__dirname, 'build'),
  // change here + tsconfig.json + jest.config.js + .eslintrc.json
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@UI': path.resolve(__dirname, 'src/components/UI'),
    '@hooks': path.resolve(__dirname, 'src/customHooks'),
    '@useSelector': path.resolve(__dirname, 'src/store/hooks/useSelector.ts'),
    '@useDispatch': path.resolve(__dirname, 'src/store/hooks/useDispatch.ts'),
    '@SVG': path.resolve(__dirname, 'src/assets/SVG'),
    '@utils': path.resolve(__dirname, 'src/utils')
  },
  ipAddresses: getIP(),
  IP: '0.0.0.0',
  PORT: 3000
};
