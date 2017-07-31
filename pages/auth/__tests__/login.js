/* eslint-env jest */
jest.mock('../../../utils/ga')
jest.mock('../../../utils/routes')

import {mount} from 'enzyme'

import {Login} from '../login'
import MainLayout from '../../../components/layouts/main'
import LoginContent from '../../../src/auth/login'

describe('pages/auth/login', () => {
  const defaultProps = {
    signin: jest.fn()
  }
  it(`verifies ${Login.name} renders correctly`, () => {
    const wrapper = mount(<Login {...defaultProps} />)
    expect(wrapper.length).toBe(1)
  })

  it(`verifies the MainLayout renders correctly`, () => {
    const wrapper = mount(<Login {...defaultProps} />)
    expect(wrapper.find(MainLayout).length).toBe(1)
  })

  it(`verifies the LoginContent renders correctly`, () => {
    const wrapper = mount(<Login {...defaultProps} />)
    expect(wrapper.find(LoginContent).length).toBe(1)
  })
})
