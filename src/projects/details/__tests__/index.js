/* eslint-env jest */
import {mount} from 'enzyme'

import {deepClone} from '/utils/helpers'

import {Loading, ProjectDetailsWrapper} from '../index'
import ProjectDetails from '../components/details'

const baseProps = {
  data: {
    Project: {
      id: '',
      location: '',
      title: '',
      type: '',
      user: {
        name: 'Test User'
      }
    }
  }
}

describe('src/projects/details', () => {
  it(`verifies ${
    ProjectDetailsWrapper.name
  } renders correctly while loading`, () => {
    const props = deepClone(baseProps)
    props.data.loading = true

    const wrapper = mount(<ProjectDetailsWrapper {...props} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find(Loading).length).toBe(1)
    expect(wrapper.find(ProjectDetails).length).toBe(0)
  })

  it(`verifies ${ProjectDetailsWrapper.name} renders correctly`, () => {
    const props = deepClone(baseProps)
    props.data.loading = false

    const wrapper = mount(<ProjectDetailsWrapper {...props} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find(Loading).length).toBe(0)
    expect(wrapper.find(ProjectDetails).length).toBe(1)
  })
})
