/* eslint-env jest */
jest.mock('cookie')
jest.mock('../../../utils/ga')
jest.mock('../../../utils/routes')

import cookie from 'cookie'
import {mount} from 'enzyme'

import {
  SignUp,
  _mapApolloDataToProps,
  _signUpSuccess,
  _signUpError
} from '/pages/auth/sign-up'
import MainLayout from '/components/layouts/main'
import SignUpContent from '/src/auth/sign-up'

describe('pages/auth/sign-up', () => {
  const props = {
    create: jest.fn()
  }

  it(`verifies ${SignUp.name} renders correctly`, () => {
    const wrapper = mount(<SignUp {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it(`verifies the MainLayout renders correctly`, () => {
    const wrapper = mount(<SignUp {...props} />)
    expect(wrapper.find(MainLayout).length).toBe(1)
  })

  it(`verifies the SignUpContent renders correctly`, () => {
    const wrapper = mount(<SignUp {...props} />)
    expect(wrapper.find(SignUpContent).length).toBe(1)
  })

  it(`correctly maps Apollo data to props`, () => {
    const apolloData = {
      createWithEmail: jest.fn(),
      ownProps: {}
    }

    const mappedProps = _mapApolloDataToProps(apolloData)

    expect(mappedProps).toEqual({
      create: expect.any(Function)
    })
  })

  it(`processes a successful sign up`, () => {
    const client = {
      resetStore: jest.fn().mockReturnValue(Promise.resolve())
    }

    const signUpResponse = {
      data: {
        signinUser: {
          token: 'test-token'
        }
      }
    }

    _signUpSuccess(client)(signUpResponse)

    expect(cookie.serialize).toHaveBeenCalledWith(
      'token',
      signUpResponse.data.signinUser.token,
      {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      }
    )
    expect(client.resetStore).toHaveBeenCalledTimes(1)
  })

  it(`processes an unsuccessful sign up`, () => {
    const originalConsoleError = console.error

    try {
      console.error = jest.fn()

      const error = 'An error message'
      _signUpError(error)

      expect(console.error).toHaveBeenCalledWith(error)
    } finally {
      console.error = originalConsoleError
    }
  })
})
