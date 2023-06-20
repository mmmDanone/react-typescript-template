import {Configuration} from 'webpack';
import paths from '../paths';

export default (): Configuration['entry'] => {
  return paths.mainEntry;
  // return {
  //   index: paths.mainEntry
  // };
};
