import PropTypes from 'prop-types';
import { Link } from '/utils/routes';
import { authRoutes } from '/utils/routes/routes-definitions';

import Input from '/components/input';
import HeadBanner from '/components/head-banner';
import Box from '/components/box';
import Button from '/components/button';
import H1 from '/components/h1';

const Login = ({ signin }) => (
  <div>
    <HeadBanner>
      <Box p={1}>
        <H1 center>Login</H1>
      </Box>
    </HeadBanner>
    <Box center p={1} width={[1, 375, 375]} mt={20}>
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
);

Login.propTypes = {
  signin: PropTypes.func.isRequired
};

export default Login;
