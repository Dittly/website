/* eslint-env jest */
import checkLoggedIn from '../check-logged-in'

describe('utils/apollo/checked-logged-in', () => {
  it('returns a loggedInUser', async () => {
    const mockApolloClient = {
      query: jest.fn().mockReturnValue(Promise.resolve({
        data: {
          name: 'Test User'
        }
      }))
    }
    const {loggedInUser} = await checkLoggedIn(mockApolloClient)
    expect(loggedInUser.name).toBe('Test User')
  })
  it('returns an empty loggedInUser in case of an error', async () => {
    const mockApolloClient = {
      query: jest.fn().mockReturnValue(Promise.reject())
    }
    const {loggedInUser} = await checkLoggedIn(mockApolloClient)
    expect(loggedInUser).toEqual({})
  })
})
