import PropTypes from 'prop-types'
import {projectRoutes} from '/utils/routes/routes-definitions'
import {Link} from '/utils/routes'

import CreateButtonSC from './index-sc'

const CreateButton = () => (
  <Link route={projectRoutes.create.name}>
    <CreateButtonSC>+ Create Project</CreateButtonSC>
  </Link>
)

CreateButton.propTypes = {
  children: PropTypes.node.isRequired
}

export default CreateButton
