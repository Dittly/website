import PropTypes from 'prop-types'
import {Link} from '../../../utils/routes'
import {authRoutes} from '../../../utils/routes/routes-definitions'

const Login = ({signin}) => (
  <div>
    {/* signin is the mutation function provided by apollo below */}
    <form onSubmit={signin}>
      <input type="email" placeholder="Email" name="email" /><br />
      <input type="password" placeholder="Password" name="password" /><br />
      <button>Sign in</button>
    </form>
    <hr />
    New? <Link prefetch route={authRoutes.signup.name}><a>Create account</a></Link>
  </div>
)

Login.propTypes = {
  signin: PropTypes.func.isRequired
}

export default Login
