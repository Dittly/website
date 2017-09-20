/* eslint-env jest */
import {mount} from 'enzyme'

import {Loading, WelcomeWrapper} from '../index'
import ProjectList from '/components/project/list'

describe('src/welcome/index', () => {
  it(`verifies ${WelcomeWrapper.name} renders correctly while loading`, () => {
    const props = {
      data: {
        loading: true
      },
      loggedInUser: {
        user: {
          name: 'Mike van Tester'
        }
      },
      signOut: jest.fn()
    }
    const wrapper = mount(<WelcomeWrapper {...props} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find(Loading).length).toBe(1)
    expect(wrapper.find(ProjectList).length).toBe(0)
  })

  it(`verifies ${WelcomeWrapper.name} renders correctly`, () => {
    const props = {
      data: {
        allProjects: [],
        loading: false
      },
      loggedInUser: {
        user: {
          name: 'Mike van Tester'
        }
      },
      signOut: jest.fn()
    }
    const wrapper = mount(<WelcomeWrapper {...props} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find(Loading).length).toBe(0)
    expect(wrapper.find(ProjectList).length).toBe(1)
  })
})
