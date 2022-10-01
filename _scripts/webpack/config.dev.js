import { alias, PATH_WEBPACK_ENTRY } from '#bootstrap';
import rules from './rules.js'
import plugins from './plugins.js'


export default {
  mode: 'development',
  entry: PATH_WEBPACK_ENTRY,
  module: {
    rules,
  },
  output: {
    filename: '[name].js'
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias,
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    https: false,
    liveReload: true,
    allowedHosts: 'all',
    compress: true,
    hot: true,
    historyApiFallback: true,
    http2: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  performance: {
    hints: false,
  }
};
