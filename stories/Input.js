import React from 'react'
import PropTypes from 'prop-types'

const inputStyles = {
  WebkitAppearance: 'none',
  border: '0',
  fontFamily: 'Rubik',
  color: '#9B9B9B',
  fontSize: '14px',
  padding: '12px',
  width: 'CALC(100% - 24px)',
  maxWidth: '375px',
  resize: 'none'
}

const Input = ({placeholder}) => (
  <input style={inputStyles} placeholder={placeholder} />
)

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default Input
