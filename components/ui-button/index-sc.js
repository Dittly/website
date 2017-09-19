import styled from 'styled-components'

import {colors, neutrals} from '../../styles/constants'

const UiButtonSC = styled.button`
  background-color: ${colors.brandBlue};
  border: none;
  padding: 8px 28px;
  color: ${neutrals.neutral00};
  box-shadow: 0px 0px 5px 0px rgba(198;198;198;1);
  border-radius: 2px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background-color: #1552bc;
  }
  &:active {
    background-color: #1049ac;
  }
`

export default UiButtonSC
