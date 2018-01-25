import styled from 'styled-components'
import {colors} from '../../styles/constants'

const CreateButtonSC = styled.div`
  color: ${colors.brandBlue};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${colors.hoverBlue};
  }
  &:active {
    color: ${colors.activeBlue};
  }
`

export default CreateButtonSC
