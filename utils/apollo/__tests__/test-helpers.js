/* eslint-env jest */
import {createMockClient} from '../test-helpers'

describe('apollo/test-helpers', () => {
  it('successfully create an Apollo mock client', () => {
    const client = createMockClient()
    expect(client).toBeDefined()
    const defaultMockResponseKey = '{"variables":{},"query":""}'
    const defaultMockResponse = client.networkInterface.mockedResponsesByKey[defaultMockResponseKey]

    expect(defaultMockResponse.length).toBe(1)
    expect(defaultMockResponse[0].request.query).toBeDefined()
    expect(defaultMockResponse[0].request.query).toBe('')
    expect(defaultMockResponse[0].result.data).toBeDefined()
    expect(defaultMockResponse[0].result.data).toEqual({})
  })
})
