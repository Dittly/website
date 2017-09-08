import React from 'react'

const uiButtonStyles = {
  backgroundColor: '#196DC8',
  border: 'none',
  padding: '8px 28px',
  color: 'white',
  boxShadow: '0px 0px 5px 0px rgba(198,198,198,1)',
  borderRadius: '5px',
  fontFamily: 'Rubik',
  fontWeight: '400',
  fontSize: '14px',
  borderRadius: '2px',
}

const UiButton = ({children, onClick}) => (
  <button
      style={uiButtonStyles}
      onClick={onClick}
  >
    {children}
  </button>
)

UiButton.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
}

export default UiButton
