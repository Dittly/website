/* eslint-env jest */
import {mount} from 'enzyme'

import {Link} from '../../../utils/routes'
import {projectRoutes} from '../../../utils/routes/routes-definitions'
import ProjectList, {ProjectListThumbnail} from '../list'

describe('components/project/list', () => {
  it(`verifies ${ProjectList.name} renders correctly`, () => {
    const props = {
      projects: []
    }
    const wrapper = mount(<ProjectList {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it(`verifies no ProjectListThumbnail renders when no projects are available`, () => {
    const props = {
      projects: []
    }
    const wrapper = mount(<ProjectList {...props} />)
    expect(wrapper.find(ProjectListThumbnail).length).toBe(0)
  })

  it(`verifies one ProjectListThumbnail renders when one project is available`, () => {
    const props = {
      projects: [{
        id: 'test-id',
        title: 'test-title',
        location: 'test-location',
        type: 'test-type',
        user: {
          name: 'test-user-name'
        }
      }]
    }
    const wrapper = mount(<ProjectList {...props} />)
    const projectListThumbnail = wrapper.find(ProjectListThumbnail)
    expect(projectListThumbnail.length).toBe(1)
    expect(projectListThumbnail.find(Link).props().route).toBe(projectRoutes.details.name)
    expect(projectListThumbnail.find(Link).props().params).toEqual({id: props.projects[0].id})
  })
})
