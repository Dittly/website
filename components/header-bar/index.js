import styled from 'styled-components'

import HeaderBarSC from './index-sc'
import PropTypes from 'prop-types'

const HeaderBarButton = styled.div`
  display: flex;
  justify-content: baseline;
  padding: 0 8px;
  width: 44px;
  height: 44px;
`

const HeaderBar = ({children}) => (
  <HeaderBarSC>
    <HeaderBarButton>
      <img src="../../static/back-arrow.svg" alt="go back" />
    </HeaderBarButton>
    <h1>{children}</h1>
    <HeaderBarButton />
  </HeaderBarSC>
)

HeaderBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderBar
