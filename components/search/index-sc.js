import styled from 'styled-components'

import {neutrals} from '/styles/constants'
import {media} from '/styles/media'

const SearchSC = styled.div`
  background-color: ${props => (props.mobile ? '#F2F2F2' : 'white')};
  width: ${props => (props.mobile ? '314px' : '100%')};

  display: ${props => (props.mobile ? 'none' : 'flex')};
  align-items: center;
  padding-left: 12px;

  position: relative;

  border-bottom: 1px solid ${neutrals.neutral15};

  font-family: Rubik;
  color: ${neutrals.neutral40};
  font-size: 14px;

  ${media.phone`
    display: ${props => (props.mobile ? 'flex' : 'none')};
  `};
`

export default SearchSC
