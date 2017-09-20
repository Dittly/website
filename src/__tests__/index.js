/* eslint-env jest */
import {mount} from 'enzyme'
import {Link} from '/utils/routes'
import {projectRoutes} from '/utils/routes/routes-definitions'

import Index from '../index'

describe('src/index', () => {
  it(`verifies ${Index.name} renders correctly`, () => {
    const wrapper = mount(<Index />)
    expect(wrapper.length).toBe(1)
    expect(
      wrapper
        .find(Link)
        .find('a')
        .prop('href')
    ).toMatch(projectRoutes.create.name)
  })
})
