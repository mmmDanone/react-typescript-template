import {Configuration} from 'webpack';
import {isDev, isProd, isWebPackDevServer} from './mode';
import paths from './paths';

//assets
import entry from './assets/entry';
import optimization from './assets/optimization';

//rules
import tsxRules from './assets/rules/tsx';
import cssRules from './assets/rules/css';
import cssModuleRules from './assets/rules/cssModule';
import sassRules from './assets/rules/sass';
import sassModuleRules from './assets/rules/sassModule';
import lessRules from './assets/rules/less';
import lessModuleRules from './assets/rules/lessModule';
import svgRules from './assets/rules/svg';

//plugins
import htmlWebpackPlugin from './assets/plugins/htmlWebpackPlugin';
import esLintPlugin from './assets/plugins/esLintPlugin';
import reactRefreshWebpackPlugin from './assets/plugins/reactRefreshWebpackPlugin';
import miniCSSExtractPlugin from './assets/plugins/miniCSSExtractPlugin';
import assetsPlugin from './assets/plugins/assetsPlugin';

export default <Configuration>{
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'inline-cheap-module-source-map' : false,
  //stats: isProd ? 'verbose' : 'errors-warnings',
  stats: {
    colors: true,
    logging: isProd ? 'verbose' : 'warn',
    modules: isProd,
    assets: isProd,
    errorDetails: true,
    errorsCount: false,
    warningsCount: false,
    entrypoints: isProd
  },
  infrastructureLogging: {
    colors: true,
    level: isProd ? 'verbose' : 'warn'
  },
  entry: entry(),
  output: {
    path: paths.output,
    publicPath: paths.publicURL,
    filename: 'static/javascript/[name]_[contenthash].js',
    chunkFilename: 'static/javascript/[name]_chunk_[contenthash].js',
    clean: {
      keep: /assets\.json/ //TODO: check this bug
    }
  },
  context: paths.srcPath,
  resolve: {
    alias: paths.alias,
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  watch: isDev && !isWebPackDevServer,
  target: isWebPackDevServer ? 'web' : 'browserslist',
  optimization: optimization(),
  module: {
    rules: [
      tsxRules(),
      cssRules(),
      cssModuleRules(),
      sassRules(),
      sassModuleRules(),
      lessRules(),
      lessModuleRules(),
      svgRules()
    ]
  },
  plugins: [
    htmlWebpackPlugin(),
    esLintPlugin(),
    isDev && isWebPackDevServer && reactRefreshWebpackPlugin(),
    isProd && miniCSSExtractPlugin(),
    assetsPlugin()
  ].filter(Boolean)
};
