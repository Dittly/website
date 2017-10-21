/* eslint-env node */

/* eslint-disable import/no-commonjs */
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

/**
 * @see https://github.com/standard-things/esm
 */
require = require('@std/esm')(module) // eslint-disable-line no-global-assign, no-native-reassign
module.exports = require('./server.js').default
