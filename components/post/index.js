import styled from 'styled-components'

import Card from '../card'
import Profile from '../profile'
import Box from '../box'

const TextBox = styled.div`padding: 0px 12px 12px 12px;`

const LargeText = styled.p`
  fontFamily: 'Rubik';
  color: #4a4a4a;
  fontSize: 18px;
  margin: 0;
  WebkitFontSmoothing: antialiased;
`

const Post = () => (
  <Card>
    <Box p={2}>
      <Profile userName="User Name" />
    </Box>
    <TextBox>
      <LargeText>This is a post with large text!</LargeText>
    </TextBox>
  </Card>
)

export default Post
