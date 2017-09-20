import PropTypes from 'prop-types'

import UiButtonSC from './index-sc'

const UiButton = ({children, onClick}) => (
  <UiButtonSC onClick={onClick}>{children}</UiButtonSC>
)

UiButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default UiButton
