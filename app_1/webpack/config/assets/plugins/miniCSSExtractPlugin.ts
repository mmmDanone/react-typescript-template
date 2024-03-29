import {WebpackPluginInstance} from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

export default (): WebpackPluginInstance => {
  return new MiniCSSExtractPlugin({
    filename: 'static/styles/style_[contenthash].css',
    chunkFilename: 'static/styles/[name]_chunk_[contenthash].css',
    //filename: 'static/styles/style.css',
    //chunkFilename: 'static/styles/[name]_chunk.css',
    linkType: false,
    ignoreOrder: false
  });
};
