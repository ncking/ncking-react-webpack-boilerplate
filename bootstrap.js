import { resolve } from 'node:path'
/**
 * Common bootstrap for server & webpack ...
 * @Nigel
 */

export const __DEV__ = process.env.NODE_ENV == 'development';
export const PATH_SASS_GLOBAL_SETTINGS = `/src/scss/config.scss`


/**
 * Dirs
 */
export const DIR_DIST = '/dist'
export const DIR_SRC = '/src'

/**
 * Paths
 */
export const PATH_ROOT = resolve('./')
export const PATH_PUBLIC = `${PATH_ROOT}/public`
export const PATH_SRC = `${PATH_ROOT}${DIR_SRC}`
export const PATH_DIST = `${PATH_PUBLIC}${DIR_DIST}`
export const PATH_WEBPACK_ENTRY = [`${PATH_SRC}/main.tsx`]



// process.env[...vars]
export const WEBPACK_ENV_VARS = []


export const alias = {
  "@components": './src/components',
  "@pages": './src/pages',
  "@config": './src/config',
  "@lib": './src/lib'
}