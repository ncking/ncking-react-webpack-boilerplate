import webpack from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {WEBPACK_ENV_VARS} from '#bootstrap'

export default [
  new ForkTsCheckerWebpackPlugin(),
  new webpack.EnvironmentPlugin(WEBPACK_ENV_VARS),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
    ignoreOrder: false,
  }),
];
