import styled from 'styled-components'
import { boxShadows, neutrals } from '../../styles/constants'

const CardSC = styled.div`
  background-color: ${neutrals.neutral00};
  box-shadow: ${boxShadows.soft};
  border-radius: 2px;
  margin-bottom: 12px;

  & + & {
    margin-bottom: 16px;
  }
  
`

export default CardSC;
