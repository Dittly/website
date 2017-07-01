import PropTypes from 'prop-types'
import Box from '../../box'

import PageHeaderSC from './index-sc'

const PageHeader = ({ children }) => (
  <Box fontSize={4}>
    <PageHeaderSC>
      {children}
    </PageHeaderSC>
  </Box>
)

PageHeader.propTypes = {
  children: PropTypes.node
}

export default PageHeader
