
import React from 'react'
import Index from '../../pages'
import renderer from 'react-test-renderer'

it('renders / correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
