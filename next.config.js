/* eslint-env node */
/* eslint-disable import/no-commonjs */
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  webpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }))
    }

    return config
  }
}