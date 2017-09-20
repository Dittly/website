/* eslint-env jest */
jest.mock('../../utils/ga')

import {mountComponentWithApolloProvider} from '/utils/test-helper'

import {Welcome} from '/pages/welcome'

const getMockCurrentResult = () =>
  jest.fn().mockReturnValue({
    loading: false,
    data: {
      allProjects: []
    }
  })

describe('pages/welcome', () => {
  const defaultProps = {
    loggedInUser: {
      user: {
        name: 'Test User'
      }
    },
    signOut: jest.fn()
  }

  it(`verifies ${Welcome.name} renders correctly`, () => {
    const wrapper = mountComponentWithApolloProvider(
      <Welcome {...defaultProps} />,
      getMockCurrentResult()
    )
    expect(wrapper.length).toBe(1)
  })
})
