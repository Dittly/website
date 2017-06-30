/* eslint-env jest */
jest.mock('react-ga')

import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../../../pages/auth/login'

describe('Login page', () => {
  it('renders / correctly', () => {
    const tree = renderer.create(
      <Login />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
