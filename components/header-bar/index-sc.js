import styled from 'styled-components'

import {boxShadows, neutrals, typography} from '../../styles/constants'

const HeaderBarSC = styled.div`
  background-color: ${neutrals.neutral00};
  padding: 4px;

  border-bottom: 1px solid ${neutrals.neutral15};

  text-align: center;

  h1 {
    margin: 0;

    font-size: 20px;
    font-family: ${typography.headerFontFamily};
  }
`

export default HeaderBarSC
