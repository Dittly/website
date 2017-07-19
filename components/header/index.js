import Box from '../box'
import {Link} from '../../utils/routes'
import {authRoutes, homeRoutes} from '../../utils/routes/routes-definitions'

const Header = () => (
  <Box bg="#d2654b" color="white"
    p={1}>
    <Link route={homeRoutes.home.name}><a>Dittly</a></Link> | <Link route={homeRoutes.secret.name}><a>Secret</a></Link> | <Link route={authRoutes.login.name}><a>Login</a></Link>
  </Box>
)

export default Header
