import HeaderBarSC from './index-sc'
import PropTypes from 'prop-types'

const HeaderBar = ({children}) => (
  <HeaderBarSC>
    <h1>{children}</h1>
  </HeaderBarSC>
)

HeaderBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderBar
