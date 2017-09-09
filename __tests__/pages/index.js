/* eslint-env jest */
import {mount} from 'enzyme'

import {Index} from '../../pages'

describe('pages/index', () => {
  it(`verifies ${Index.name} renders correctly`, () => {
    const wrapper = mount(<Index />)
    expect(wrapper.length).toBe(1)
  })
})
