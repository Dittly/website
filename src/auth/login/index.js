import PropTypes from 'prop-types'
import {Link} from '../../../utils/routes'
import {authRoutes} from '../../../utils/routes/routes-definitions'

import Input from '/components/input'
import HeaderBar from '/components/header-bar'
import Box from '/components/box'
import Button from '/components/button'

const Login = ({signin}) => (
  <div>
    <HeaderBar>Login</HeaderBar>
    <Box bg="#fff" p={1}>
      {/* signin is the mutation function provided by apollo below */}
      <form onSubmit={signin}>
        <label htmlFor="email">
          Email
          <Input type="email" placeholder="Email" name="email" />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Password
          <Input type="password" placeholder="Password" name="password" />
        </label>
        <br />
        <br />
        <Button>Sign in</Button>
      </form>
      <br />
      New?{' '}
      <Link prefetch route={authRoutes.signup.name}>
        <a>Create account</a>
      </Link>
    </Box>
  </div>
)

Login.propTypes = {
  signin: PropTypes.func.isRequired
}

export default Login
