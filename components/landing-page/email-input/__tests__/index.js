/* eslint-env jest */
import { mount } from 'enzyme'
import { EmailInput } from '../'

describe('EmailInput', () => {
  it('sets the email address in the state', () => {
    const inputValues = {
      email: 'unit-test-email@dittly.co'
    }
    const wrapper = mount(<EmailInput submitEmail={() => {}} />)

    // Populate the form fields
    Object.keys(inputValues).forEach((fieldName) => {
      const field = wrapper.find(`[name="${fieldName}"]`).first()
      field.simulate('change', { target: { name: fieldName, value: inputValues[fieldName] } })
    })

    expect(wrapper.state()).toEqual(inputValues)
  })

  it('submits the form successfully', () => {
    expect.assertions(1)
    const submitEmailMock = jest.fn()
    submitEmailMock.mockReturnValue(Promise.resolve())
    const wrapper = mount(<EmailInput submitEmail={submitEmailMock} />)
    wrapper.find('form').simulate('submit')

    return Promise.resolve().then(() => {
      expect(wrapper.find('#submissionMessage').text()).toEqual(`Awesome, thanks for signing up! We'll be in touch once Dittly is ready for beta access.`)
    })
  })

  // FIXME: When "submitEmailMock" rejects the promise, the "return Promise.resolve()" at the end of the Jest test doesn't run last.
  //        Instead, the "catch" handler in the component's "onSubmit" function runs last.
  xit('submits the form unsuccessfully', () => {
    expect.assertions(1)
    const submitEmailMock = jest.fn()
    submitEmailMock.mockReturnValue(Promise.reject({
      message: 'A unique constraint would be violated on SignUpPreview. Details: Field name = email'
    }))
    const wrapper = mount(<EmailInput submitEmail={submitEmailMock} />)
    wrapper.find('form').simulate('submit')
    console.log('AAA', wrapper.state())

    return Promise.resolve().then(() => {
      console.log('BBB', wrapper.state())
      expect(wrapper.find('#submissionMessage').text()).toEqual(`It looks like you've already signed up. That's awesome, we'll get in touch with you asap.`)
    })
  })
})
