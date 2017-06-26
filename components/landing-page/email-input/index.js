import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import { createSignUpPreview } from './index-gq'

const updateStateValue = (key, value) => (prevState, props) => ({ // eslint-disable-line no-unused-vars
  [key]: value
})

export class EmailInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState(updateStateValue(event.target.name, event.target.value))
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.submitEmail(this.state.email)
      .then(() => {
        this.setState(
          updateStateValue('submissionMessage', `Awesome, thanks for signing up! We'll be in touch once Dittly is ready for beta access.`)
        )
      })
      // See the "submits the form unsuccessfully" test case for details as to why this is ignored
      .catch(/* istanbul ignore next */ (error) => {
        if (error.message.includes('unique constraint') && error.message.includes('Field name = email')) {
          this.setState(
            updateStateValue('submissionMessage', `It looks like you've already signed up. That's awesome, we'll get in touch with you asap.`)
          )
        }
      })
  }

  render() {
    const { submissionMessage } = this.state

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input name="email" type="email" onChange={this.onChange} placeholder="Your Email" required />
          <button type="submit">Send</button>
        </form>
        {
          submissionMessage && (
            <p id="submissionMessage">{submissionMessage}</p>
          )
        }
      </div>
    )
  }
}

EmailInput.propTypes = {
  submitEmail: PropTypes.func.isRequired
}

/* istanbul ignore next */
// TODO: Figure out how to write test for this
const EmailInputWrapper = graphql(createSignUpPreview, {
  props: ({ mutate }) => ({
    submitEmail: /* istanbul ignore next */ (email) => mutate({
      variables: { email }
    })
  })
})(EmailInput)

export default EmailInputWrapper
