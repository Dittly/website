import styled from 'styled-components'
import {neutrals, typography} from '/styles/constants'

import Card from '/components/card'
import Profile from '/components/profile'
import Box from '/components/box'

const TextBox = styled.div`
  padding: 0px 12px 12px 12px;
`

const LargeText = styled.p`
  font-family: ${typography.fontFamily};
  color: ${neutrals.neutral50};
  font-size: 18px;
  margin: 0;
`

const Post = () => (
  <Card>
    <Box p={1}>
      <Profile userName="User Name" />
    </Box>
    <TextBox>
      <LargeText>This is a post with large text!</LargeText>
    </TextBox>
  </Card>
)

export default Post
