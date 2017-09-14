import Box from '../box'
import {Link} from '../../utils/routes'
import {authRoutes, homeRoutes} from '../../utils/routes/routes-definitions'
import styled from 'styled-components'

import {colors, typography} from '../../styles/constants'

import HeaderSC from './index-sc'

const Logo = styled.a`
  color: ${colors.brandOrange};
  font-family: ${typography.headerFontFamily};
  padding: 12px;
  font-weight: 600;
  display: inline-block;
  font-size: 20px;
`

const Header = () => (
  <HeaderSC>
    <Box>
      <Link route={homeRoutes.home.name}>
        <Logo>Dittly</Logo>
      </Link>{' '}
      |{' '}
      <Link route={homeRoutes.welcome.name}>
        <a>Welcome</a>
      </Link>{' '}
      |{' '}
      <Link route={authRoutes.login.name}>
        <a>Login</a>
      </Link>
    </Box>
  </HeaderSC>
)

export default Header
