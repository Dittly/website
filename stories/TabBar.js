import React from 'react';

const tabBarStyles = {
  backgroundColor: 'white',
  borderTop: '1px solid #EDEDED',
  maxWidth: '375px',
};

const tabBarButtonStyles = {
  backgroundColor: 'white',
  border: 'none',
  fontFamily: 'Rubik',
  color: '#9B9B9B',
  fontSize: '14px',
  width: '50%',
  padding: '12px',
};

const TabBar = () => (
  <div style={tabBarStyles}>
    <button style={tabBarButtonStyles}>
        Search
    </button>
    <button style={tabBarButtonStyles}>
        Profile
    </button>
  </div>
);

export default TabBar
