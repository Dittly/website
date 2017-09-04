import styled from 'styled-components'

import { boxShadows, neutrals, typography } from '../../styles/constants'


const HeaderBarSC = styled.div`
  background-color: ${neutrals.neutral00};
  border-bottom: 1px solid ${neutrals.neutral15};
  padding: 4px;
  text-align: center;

  h1 {
    font-size: 20px;
    font-family: ${typography.headerFontFamily};
    margin: 0;
  }
`

export default HeaderBarSC;
