import React from 'react';

import Avatar from './Avatar';

const profileStyles = {
  display: 'flex',
  alignItems: 'center'
};

const nameStyles = {
  fontSize: '12px',
  color: '#4A4A4A',
  fontFamily: 'Rubik',
  display: 'block',
  marginLeft: '4px'
};

const timeStyles = {
  fontSize: '8px',
  color: '#9B9B9B',
  fontFamily: 'Rubik',
  marginLeft: '4px',
  lineHeight: '2'
};

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const Profile = () => (
  <div style={profileStyles}>
    <Avatar />
    <div style={flexContainer}>
      <span style={nameStyles}>User Name</span>
      <time style={timeStyles}>Time stamp</time>
    </div>
  </div>
);

export default Profile;
