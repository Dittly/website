import PropTypes from 'prop-types'
import {Link} from '../../../utils/routes'
import {authRoutes} from '../../../utils/routes/routes-definitions'

const SignUp = ({create}) => (
  <div>
    {/* create is the mutation function provided by apollo below */}
    <form onSubmit={create}>
      <input type="text" placeholder="Your Name" name="name" /><br />
      <input type="email" placeholder="Email" name="email" /><br />
      <input type="password" placeholder="Password" name="password" /><br />
      <button>Create account</button>
    </form>
    <hr />
    Already have an account? <Link prefetch route={authRoutes.login.name}><a>Sign in</a></Link>
  </div>
)

SignUp.propTypes = {
  create: PropTypes.func.isRequired
}

export default SignUp
