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

  ul {
    display: flex;
    align-items: center;
  }
`

const NavLinks = styled.a`
  padding: 16px;
`

const AvatarLink = styled.a`
  display: block;
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
        <ul>
          <li>
            <Link route={authRoutes.login.name}>
              <NavLinks>Login</NavLinks>
            </Link>
          </li>
          <li>
            <Link route={profileRoutes.profile.name}>
              <AvatarLink>
                <Avatar />
              </AvatarLink>
            </Link>
          </li>
        </ul>
      </Navigation>
    </Box>
  </HeaderSC>
)

export default Header
