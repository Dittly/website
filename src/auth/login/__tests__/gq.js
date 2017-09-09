/* eslint-env jest */
import * as gqQueries from '../gq'

describe('src/auth/login', () => {
  Object.entries(gqQueries).forEach(([queryName, query]) => {
    it(`query "${queryName}" matches the snapshot`, () => {
      expect(query).toMatchSnapshot()
    })
  })
})
