import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { PATH_SASS_GLOBAL_SETTINGS, __DEV__ } from '#bootstrap'


const styleTagLoader = {
  loader: 'style-loader',
  options: {
    injectType: 'singletonStyleTag',
    attributes: {},
  },
}
/**
*
*/
const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      fiber: false,
      outputStyle: 'expanded',
      sourceMap: true,
    },
    additionalData: `@import "${PATH_SASS_GLOBAL_SETTINGS}";`
  },
}
const cssLoader = {
  loader: 'css-loader',
  options: {
    url: false,
    modules: {
      localIdentName: "[sha1:hash:hex:4]",
      mode: (resourcePath) => { // We swap the naming convention here: we name *global files
        if (/pure.(css|scss)$/i.test(resourcePath)) {
          return 'pure'
        }
        if (/global.(css|scss)$/i.test(resourcePath)) {
          return 'global'
        }
        return 'local'
      },
    },
  },
}

export default [
  {
    test: /\.(js|ts)x?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "swc-loader", // you would put 
      options: {
        // Enable source map
       // sourceMap: true,
       // sync: true,
        jsc: {
          parser: {
            syntax: "typescript",
            jsx: true,
          },
          transform: {
            react: {
              pragma: "React.createElement",
              pragmaFrag: "React.Fragment",
              throwIfNamespace: true,
              development: __DEV__,
              useBuiltins: false,
              runtime: 'automatic'
            },
          },
        },
      },
    },
  },
  {
    test: /\.(css|scss)$/,
    sideEffects: true, // must set to true, otherwise tree shaking will strip the css. In the context of the JS, it is unused!
    include: [/scss/],
    exclude: [/node_modules/],
    resolve: {
      fullySpecified: false,
    },
    use: __DEV__ ? [
      styleTagLoader,
      cssLoader,
      sassLoader
    ] : [
      MiniCssExtractPlugin.loader,
      cssLoader,
      'postcss-loader',
      sassLoader
    ],
  }
];
