import React from 'react';

import imageFile from '../static/avatar.png';

const avatarStyles = {
  src: imageFile,
  alt: 'User Avatar',
  borderRadius: '100%',
  display: 'inline-block'
};

const Avatar = () => (
  <div style={avatarStyles}>
    <img src={avatarStyles.src} alt={avatarStyles.alt} />
  </div>
);

export default Avatar;
