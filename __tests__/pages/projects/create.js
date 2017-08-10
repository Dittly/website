/* eslint-env jest */
jest.mock('../../../utils/ga')
import {mountComponentWithApolloProvider} from '../../../utils/test-helper'

import {Create} from '../../../pages/projects/create'
import MainLayout from '../../../components/layouts/main'
import CreateContent from '../../../src/projects/create'

const getMockCurrentResult = () => (jest.fn().mockReturnValue({
  loading: false,
  data: {
    __type: {
      enumValues: []
    }
  }
}))

describe('pages/projects/create', () => {
  it.only(`verifies ${Create.name} renders correctly`, () => {
    const wrapper = mountComponentWithApolloProvider(<Create />, getMockCurrentResult())
    expect(wrapper.length).toBe(1)
  })

  it(`verifies the MainLayout renders correctly`, () => {
    const wrapper = mountComponentWithApolloProvider(<Create />, getMockCurrentResult())
    expect(wrapper.find(MainLayout).length).toBe(1)
  })

  it(`verifies the CreateContent renders correctly`, () => {
    const wrapper = mountComponentWithApolloProvider(<Create />, getMockCurrentResult())
    expect(wrapper.find(CreateContent).length).toBe(1)
  })
})
