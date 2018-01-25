import styled from 'styled-components'
import {media} from '../../styles/media'

const SectionSC = styled.div`
  padding: 12px;
  padding-top: 4px;
  text-align: center;

  ${media.tablet`
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`

export default SectionSC
