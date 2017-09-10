/**
 * @see https://github.com/standard-things/esm
 */

/* eslint-disable import/no-commonjs */
require = require('@std/esm')(module) // eslint-disable-line no-global-assign, no-native-reassign
module.exports = require('./server.js').default
