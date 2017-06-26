import React from 'react'
import { mount } from 'enzyme'
import withData from '../with-data'

const DummyComponent = () => (
  <p>A dummy component for testing purposes.</p>
)
DummyComponent.displayName = 'DummyComponent'

describe('apollo/with-data', () => {
  it('sets the displayName correctly', () => {
    const WithDataComponent = withData(() => (<DummyComponent />))
    const wrapper = mount(<WithDataComponent serverState={{}} />)
    // console.log(wrapper.debug())
    expect(wrapper.find('WithData(DummyComponent)').exists()).toBe(true)
  })
})
