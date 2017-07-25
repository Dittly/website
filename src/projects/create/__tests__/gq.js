/* eslint-env jest */
import * as gqQueries from '../gq'

describe('src/welcome/gq', () => {
  Object.entries(gqQueries).forEach(([queryName, query]) => {
    it(`query "${queryName}" matches the snapshot`, () => {
      expect(query).toMatchSnapshot()
    })
  })
})
