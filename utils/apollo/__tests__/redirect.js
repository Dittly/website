/* eslint-env jest */
import redirect from '../redirect'

describe('utils/apollo/redirect', () => {
  it('redirects on the server', () => {
    const mockContext = {
      res: {
        end: jest.fn(),
        writeHead: jest.fn()
      }
    }
    const targetRoute = {
      pattern: 'test/pattern'
    }
    redirect(mockContext, targetRoute)
    expect(mockContext.res.writeHead).toHaveBeenCalledWith(303, {
      Location: 'test/pattern'
    })
    expect(mockContext.res.end).toHaveBeenCalled()
  })
})
