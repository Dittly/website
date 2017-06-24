import Box from '../box'

import PageHeaderSC from './index-sc'

export default ({ children }) => (
  <Box color="tomato" fontSize={4}>
    <PageHeaderSC>
      {children}
    </PageHeaderSC>
  </Box>
)