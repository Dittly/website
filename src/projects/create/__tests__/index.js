/* eslint-env jest */
import {mount} from 'enzyme'
import CreateProjectForm from '../../../../components/project/create-form'

import {Create} from '../index'

describe('src/projects/create', () => {
  it(`verifies ${Create.name} renders correctly`, () => {
    const props = {
      projectTypes: [],
      submitProject: jest.fn()
    }
    const wrapper = mount(<Create {...props} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find(CreateProjectForm).length).toBe(1)
  })

  // Test success and error case when creating a project
  ;[
    {
      name: 'success',
      returnValue: Promise.resolve()
    },
    {
      name: 'failure',
      returnValue: Promise.reject()
    }
  ].forEach(scenario => {
    it(`verifies a project gets submitted with ${scenario.name}`, () => {
      const submitProjectMock = jest
        .fn()
        .mockReturnValueOnce(scenario.returnValue)
      const props = {
        projectTypes: [],
        submitProject: submitProjectMock,
        loggedInUser: {
          user: {
            id: 'test-user-id'
          }
        }
      }

      const wrapper = mount(<Create {...props} />)
      wrapper
        .find(CreateProjectForm)
        .find('form')
        .simulate('submit')
      expect(submitProjectMock).toHaveBeenCalledTimes(1)
      expect(submitProjectMock).toHaveBeenCalledWith({
        location: '',
        title: '',
        type: null,
        userId: 'test-user-id'
      })
    })
  })
})
