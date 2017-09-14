import styled from 'styled-components'

import {neutrals, typography} from '../../styles/constants'

const HeaderBarSC = styled.div`
  display: flex;
  align-items: center;
  background-color: ${neutrals.neutral00};

  position: relative;

  border-bottom: 1px solid ${neutrals.neutral15};

  text-align: center;

  h1 {
    margin: 0 auto;

    font-size: 20px;
    font-family: ${typography.headerFontFamily};
  }
`

export default HeaderBarSC
