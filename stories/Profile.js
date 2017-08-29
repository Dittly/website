import React from 'react';

import Avatar from './Avatar';

const profileStyles = {
  display: 'flex',
};

const nameStyles = {
  fontSize: '12px',
  color: '#4A4A4A',
  fontFamily: 'Rubik',
  display: 'block'
};

const timeStyles = {
  fontSize: '8px',
  color: '#9B9B9B',
  fontFamily: 'Rubik',
};

const Profile = () => (
  <div style={profileStyles}>
    <Avatar />
    <div>
      <span style={nameStyles}>User Name</span>
      <time style={timeStyles}>Time stamp</time>
    </div>
  </div>
);

export default Profile;
