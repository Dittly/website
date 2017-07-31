/* eslint-env jest */
import {mount} from 'enzyme'

import CreateForm from '../create-form'

describe('components/project/create-form', () => {
  it(`verifies ${CreateForm.name} renders correctly`, () => {
    const props = {
      onSubmit: jest.fn(),
      projectTypes: []
    }
    const wrapper = mount(<CreateForm {...props} />)
    expect(wrapper.length).toBe(1)
  })

  it(`verifies prop types are available`, () => {
    const props = {
      onSubmit: jest.fn(),
      projectTypes: ['test-prop-type']
    }
    const wrapper = mount(<CreateForm {...props} />)
    const propTypesSelect = wrapper.find('#create-project-type')
    expect(propTypesSelect.find('option').length).toBe(props.projectTypes.length)

    const propTypeOption = propTypesSelect.find('option').first()
    expect(propTypeOption.key()).toBe(props.projectTypes[0])
    expect(propTypeOption.text()).toBe(props.projectTypes[0])
    expect(propTypeOption.props().value).toBe(props.projectTypes[0])
  })
})
