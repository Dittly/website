import React from 'react'

const updateStateValue = (fieldName, value) => (prevState, props) => ({
  [fieldName]: value
})

class EmailInput extends React.Component {
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

  // Ignoring that temporarily until Apollo is installed to deal with form submits
  /* istanbul ignore next */
  onSubmit(event) {
    event.preventDefault()
    console.log('STATE IS', this.state)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="email" type="email" onChange={this.onChange} placeholder="Your Email" required />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default EmailInput
