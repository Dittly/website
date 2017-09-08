import React from 'react'

import Card from './Card'
import Profile from './Profile'
import LargeText from './LargeText'

const postStyles = {
  padding: '12px'
}

const textStyles = {
  padding: '0px 12px 12px 12px'
}


const Post = () => (
  <Card>
    <div style={postStyles}>
      <Profile />
    </div>
    <div style={textStyles}>
      <LargeText>This is a post with large text!</LargeText>
    </div>
  </Card>
)

export default Post
