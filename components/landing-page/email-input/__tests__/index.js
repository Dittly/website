import { mount } from 'enzyme'
import EmailInput from '../'

describe('EmailInput', () => {
  it('sets the email address in the state', () => {
    const inputValues = {
      email: 'unit-test-email@dittly.co'
    }
    const wrapper = mount(<EmailInput />)

    // Populate the form fields
    Object.keys(inputValues).forEach((fieldName) => {
      const field = wrapper.find(`[name="${fieldName}"]`).first()
      field.simulate('change', { target: { name: fieldName, value: inputValues[fieldName] } })
    })

    const expectedFormFields = {
      ...inputValues
    }
    expect(wrapper.state()).toEqual(expectedFormFields)
  })
})
