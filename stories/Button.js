import React from 'react';

const buttonStyles = {
  backgroundColor: '#F9593C',
  border: 'none',
  padding: '8px 20px',
  minHeight: '44px',
  minWidth: '44px',
  color: 'white',
  boxShadow: '0px 0px 5px 0px rgba(198,198,198,1)',
  borderRadius: '5px',
  fontFamily: 'Roboto Slab'
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
