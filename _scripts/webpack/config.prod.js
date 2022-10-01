import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin' 
import { alias, PATH_DIST, DIR_DIST, PATH_WEBPACK_ENTRY, __DEV__ } from '#bootstrap'
import rules from './rules.js'
import plugins from './plugins.js'



const minimizer = __DEV__ ? [] :
  [
    new TerserPlugin({
      parallel: 15,
      terserOptions: {
        parse: { ecma: 8 },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2
        },
        mangle: { safari10: true },
        output: {
          ecma: 5,
          safari10: true,
          comments: false,
          ascii_only: true
        },
        ecma: 5
      }
    }),
    new CssMinimizerPlugin(),
  ]


export default {
  mode: 'production',
  entry: PATH_WEBPACK_ENTRY,
  module: {
    rules
  },
  output: {
    path: PATH_DIST,
    filename: `[name].[chunkhash].js`,
    publicPath: DIR_DIST, // need this for dynamic import
    hashFunction: 'xxhash64',
    hashDigest: 'hex',
    hashDigestLength: 8,
    clean: true,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias
  },
  stats: 'full',
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: { name: 'webpack' },
    minimizer,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: "warning",
  }
};
