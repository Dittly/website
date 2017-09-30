import Box from '../box'
import {Link} from '/utils/routes'
import {
  authRoutes,
  homeRoutes,
  profileRoutes
} from '/utils/routes/routes-definitions'
import styled from 'styled-components'

import {colors, typography} from '../../styles/constants'

import HeaderSC from './index-sc'
import Search from '../search'

const Logo = styled.a`
  display: inline-block;
  padding: 12px;

  color: ${colors.brandOrange};
  font-family: ${typography.headerFontFamily};
  font-weight: 600;
  font-size: 20px;
`

const Navigation = styled.div`
  margin-left: auto;
  padding: 12px;
`

const Header = () => (
  <HeaderSC>
    <Box flex center>
      <Link route={homeRoutes.welcome.name}>
        <Logo>Dittly</Logo>
      </Link>
      <Search />
      <Navigation>
        <Link route={authRoutes.login.name}>
          <a>Login</a>
        </Link>
        <Link route={profileRoutes.profile.name}>
          <a>Profile</a>
        </Link>
      </Navigation>
    </Box>
  </HeaderSC>
)

export default Header
