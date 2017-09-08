import React from 'react'

import searchIcon from '../static/search.svg'
import imageFile from '../static/avatar.png'

import Avatar from './Avatar'


const searchImage = {
  src: searchIcon,
  alt: 'magifying glass',
}

const tabBarStyles = {
  backgroundColor: 'white',
  borderTop: '1px solid #EDEDED',
  maxWidth: '375px',
  display: 'flex',
}

const tabBarButtonStyles = {
  backgroundColor: 'white',
  border: 'none',
  fontFamily: 'Rubik',
  color: '#9B9B9B',
  fontSize: '14px',
  width: '50%',
  padding: '6px',
  display: 'flex',
  justifyContent: 'center',
}

const TabBar = () => (
  <div style={tabBarStyles}>
    <button style={tabBarButtonStyles}>
      <img src={searchImage.src} alt={searchImage.alt} />
    </button>
    <button style={tabBarButtonStyles}>
      <Avatar />
    </button>
  </div>
)

export default TabBar
