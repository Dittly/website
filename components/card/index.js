import PropTypes from 'prop-types'

import CardSC from './index-sc'

const Card = ({children}) => (
  <CardSC>
    {children}
  </CardSC>
)

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card
