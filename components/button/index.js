import PropTypes from 'prop-types'

import ButtonSC from './index-sc'

const Button = ({children}) => (
  <ButtonSC>
    {children}
  </ButtonSC>
)

Button.propTypes = {
  // children: PropTypes.node.isRequired
}

export default Button
