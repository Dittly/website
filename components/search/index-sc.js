import styled from 'styled-components'

import {neutrals} from '../../styles/constants'

const SearchSC = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  background-color: ${neutrals.neutral00};

  position: relative;

  border-bottom: 1px solid ${neutrals.neutral15};

  font-family: Rubik;
  color: ${neutrals.neutral40};
  font-size: 14px;
`

export default SearchSC
