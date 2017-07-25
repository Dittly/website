/* eslint-env jest */
import isFunction from 'lodash.isfunction'
import NextConfig from '../next.config'

describe('next.config.js', () => {
  it('verifies the custom next.js settings are available', () => {
    expect(NextConfig).toBeDefined()
    expect(typeof NextConfig).toBe('object')
  })

  it('verifies the custom next.js webpack settings are available', () => {
    expect(NextConfig.webpack).toBeDefined()
    expect(isFunction(NextConfig.webpack)).toBeTruthy()
  })

  it('verifies the correct plugins are available in development', () => {
    const initialWebpackSettings = {
      plugins: []
    }
    process.env.NODE_ENV = 'developmenbt' // eslint-disable-line no-undef
    const webpackConfig = NextConfig.webpack(initialWebpackSettings)
    process.env.NODE_ENV = 'test' // eslint-disable-line no-undef

    const expectedPlugins = ['BundleAnalyzerPlugin']
    expect(webpackConfig.plugins.length).toBe(expectedPlugins.length)
    expectedPlugins.forEach((pluginName, index) => {
      const plugin = webpackConfig.plugins[index]
      expect(plugin.constructor.name).toBe(pluginName)
    })
  })

  it('verifies the correct plugins are available in production', () => {
    const initialWebpackSettings = {
      plugins: []
    }
    process.env.NODE_ENV = 'production' // eslint-disable-line no-undef
    const webpackConfig = NextConfig.webpack(initialWebpackSettings)
    process.env.NODE_ENV = 'test' // eslint-disable-line no-undef

    const expectedPlugins = []
    expect(webpackConfig.plugins.length).toBe(expectedPlugins.length)
  })
})
