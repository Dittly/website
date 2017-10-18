/* eslint-env jest */
/* global process */
import {_init, _shouldAddEvent, recordEvent} from '../tracking'

const _setNodeEnv = newNodeEnv => {
  Object.defineProperty(process.env, 'NODE_ENV', {
    value: newNodeEnv
  })
}

describe('utils/tracking', () => {
  let NODE_ENV_ORIGINAL

  beforeAll(() => {
    NODE_ENV_ORIGINAL = process.env.NODE_ENV
  })

  afterEach(() => {
    _setNodeEnv(NODE_ENV_ORIGINAL)
  })

  it('returns the same client once initialized', () => {
    const clientOne = _init()
    expect(clientOne).toBeDefined()

    const clientTwo = _init()
    expect(clientTwo).toBeDefined()

    expect(clientOne).toBe(clientTwo)
  })

  it('should add an event for an allowed collection', () => {
    _setNodeEnv('production')
    expect(_shouldAddEvent('test-collection')).toBe(true)
  })

  it('should not add an event for a collection that is not allowed', () => {
    _setNodeEnv('production')
    expect(_shouldAddEvent('not-allowed-collection')).toBe(false)
  })

  it('records an event properly', () => {
    _setNodeEnv('production')
    const client = _init()
    client.recordEvent = jest.fn()

    const event = {
      name: 'event one',
      number: 42
    }

    recordEvent('test-collection', event)
    expect(client.recordEvent).toHaveBeenCalledWith('test-collection', event)
  })

  it('prints an error to the console if an event cannot be recorded', () => {
    const consoleLogOriginal = console.log
    console.log = jest.fn()

    try {
      const client = _init()
      client.recordEvent = jest.fn()

      recordEvent('not-allowed-collection', {})
      expect(client.recordEvent).not.toHaveBeenCalled()
      expect(console.log).toHaveBeenCalledWith(
        `Event for collection not-allowed-collection is not allowed: ${JSON.stringify(
          {}
        )}`
      )
    } finally {
      console.log = consoleLogOriginal
    }
  })
})
