import { __DEV__, PATH_SRC, alias } from '#bootstrap'



const plugins = [
    ['babel-plugin-module-resolver', {
        root: [PATH_SRC],
        alias,
    }],
    ['transform-react-remove-prop-types', {}],
    ['@babel/plugin-syntax-dynamic-import', {}]
]

if (!__DEV__) {
    plugins.push(
        ['babel-plugin-react-remove-properties', { properties: ['data-test', 'data-testid'] }],
        ["transform-remove-strict-mode"],
    );
}
const presets = [
    "@babel/preset-typescript",
    "@babel/preset-react"]



export default {
    presets,
    plugins
}