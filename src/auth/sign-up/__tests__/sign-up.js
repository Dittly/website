/* eslint-env jest */
jest.mock('../../../../utils/routes')
import {mount} from 'enzyme'

import SignUp from '../'
import {Link} from '/utils/routes'
import {authRoutes} from '/utils/routes/routes-definitions'

describe('src/auth/sign-up', () => {
  it(`verifies ${SignUp.name} renders correctly`, () => {
    const props = {
      create: jest.fn()
    }
    const wrapper = mount(<SignUp {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it(`verifies the signup form submits`, () => {
    const props = {
      create: jest.fn()
    }
    const wrapper = mount(<SignUp {...props} />)
    wrapper.find('form').simulate('submit')
    expect(props.create).toHaveBeenCalled()
  })

  it(`verifies the login link renders correctly`, () => {
    const props = {
      create: jest.fn()
    }
    const wrapper = mount(<SignUp {...props} />)
    wrapper.find('form').simulate('submit')
    expect(wrapper.find(Link).prop('prefetch')).toBe(true)
    expect(wrapper.find(Link).prop('route')).toBe(authRoutes.login.name)
  })
})
