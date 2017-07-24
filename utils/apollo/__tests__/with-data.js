/* eslint-env jest */
import React from 'react'
import {mount} from 'enzyme'
import cookie from 'cookie'
import withData, {getComponentDisplayName, parseCookies} from '../with-data'

const DummyComponent = () => (
  <p>A dummy component for testing purposes.</p>
)
DummyComponent.displayName = 'DummyComponent'

describe('apollo/with-data', () => {
  it('sets the displayName correctly', () => {
    const WithDataComponent = withData(DummyComponent)
    const wrapper = mount(<WithDataComponent serverState={{}} />)
    expect(wrapper.find('WithData(DummyComponent)').exists()).toBe(true)
  })

  it('gets the component displayName correctly', () => {
    expect(getComponentDisplayName(DummyComponent)).toBe(DummyComponent.displayName)
  })

  it('gets the component displayName as "Unknown" if appropriate', () => {
    const displayName = DummyComponent.displayName
    DummyComponent.displayName = null
    expect(getComponentDisplayName(<DummyComponent />)).toBe('Unknown')
    DummyComponent.displayName = displayName
  })

  it('parses the cookie from the request (server-side)', () => {
    const mockCtx = {
      req: {
        headers: {
          cookie: 'test-cookie'
        }
      }
    }
    parseCookies(mockCtx)
    expect(cookie.parse).toHaveBeenCalledWith('test-cookie', {})
  })

  it('parses the cookie from document.cookie (client-side)', () => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'test-cookie'
    })

    parseCookies()
    expect(cookie.parse).toHaveBeenCalledWith('test-cookie', {})
  })
})
