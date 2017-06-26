/* eslint-env jest */
jest.mock('react-ga')
jest.mock('next/document')

import React from 'react'
import Document from '../../pages/_document'
import renderer from 'react-test-renderer'

it('renders / correctly', () => {
  const tree = renderer.create(
    <Document />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
