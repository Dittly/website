import HeadBannerSC from './index-sc'
import PropTypes from 'prop-types'

const HeadBanner = ({children}) => (
  <HeadBannerSC>
    {children}
  </HeadBannerSC>
)

HeadBanner.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeadBanner
