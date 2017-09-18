import PropTypes from 'prop-types'
import {Link} from '../../../utils/routes'
import {authRoutes} from '../../../utils/routes/routes-definitions'

import Input from '/components/input'
import HeaderBar from '/components/header-bar'
import Box from '/components/box'
import Button from '/components/button'

const SignUp = ({create}) => (
  <div>
    <HeaderBar>Sign up</HeaderBar>
    <Box bg="#fff" p={1}>
      {/* create is the mutation function provided by apollo below */}
      <form onSubmit={create}>
        <label htmlFor="name">
          Name
          <Input type="text" placeholder="Your Name" name="name" />
        </label>
        <br />
        <br />
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
        <Button primary>Create account</Button>
      </form>
      <hr />
      Already have an account?{' '}
      <Link prefetch route={authRoutes.login.name}>
        <a>Sign in</a>
      </Link>
    </Box>
  </div>
)

SignUp.propTypes = {
  create: PropTypes.func.isRequired
}

export default SignUp
