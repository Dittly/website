import styled from 'styled-components'
import {space} from 'styled-system'
import {media} from '../../styles/media'

import Box from '../box'


const SectionSC = styled.div`
  padding: 12px;
  padding-top: 4px;
  text-align: center;

  ${media.tablet`
    text-align: left;
  `}
`

export default SectionSC
