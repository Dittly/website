import PropTypes from 'prop-types'

import AddSC from './index-sc'

const Add = ({children}) => (
  <AddSC >
    {children}
  </AddSC>
)

Add.propTypes = {
  children: PropTypes.node.isRequired
}

export default Add
