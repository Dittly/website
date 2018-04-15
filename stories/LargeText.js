import React from 'react';
import PropTypes from 'prop-types';

const largeTextStyles = {
  fontFamily: 'Rubik',
  color: '#4A4A4A',
  fontSize: '18px',
  margin: '0',
  WebkitFontSmoothing: 'antialiased'
};

const LargeText = ({ children }) => <p style={largeTextStyles}>{children}</p>;

LargeText.propTypes = {
  children: PropTypes.node
};

export default LargeText;
