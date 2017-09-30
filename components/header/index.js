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
import Avatar from '../avatar'

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

  ul {
    display: flex;
    align-items: center;
  }

  a {
    padding: 20px 12px;
  }
`

const Header = () => (
  <HeaderSC>
    <Box flex center>
      <Link route={homeRoutes.welcome.name}>
        <Logo>Dittly</Logo>
      </Link>
      <Search />
      <Navigation>
        <ul>
          <li>
            <Link route={authRoutes.login.name}>
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link route={profileRoutes.profile.name}>
              <a>
                <Avatar />
              </a>
            </Link>
          </li>
        </ul>
      </Navigation>
    </Box>
  </HeaderSC>
)

export default Header
