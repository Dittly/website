/* eslint-env jest */
jest.mock('../../../utils/ga')
jest.mock('../../../utils/routes')

import {mount} from 'enzyme'

import {SignUp} from '../../../pages/auth/sign-up'
import MainLayout from '../../../components/layouts/main'
import SignUpContent from '../../../src/auth/sign-up'

describe('pages/auth/sign-up', () => {
  it(`verifies ${SignUp.name} renders correctly`, () => {
    const wrapper = mount(<SignUp />)
    expect(wrapper.length).toBe(1)
  })

  it(`verifies the MainLayout renders correctly`, () => {
    const wrapper = mount(<SignUp />)
    expect(wrapper.find(MainLayout).length).toBe(1)
  })

  it(`verifies the SignUpContent renders correctly`, () => {
    const wrapper = mount(<SignUp />)
    expect(wrapper.find(SignUpContent).length).toBe(1)
  })
})
