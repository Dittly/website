import styled from 'styled-components'
import {media} from '../../styles/media'

const ProjectListSC = styled.div`
  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
    max-width: 768px;
    margin: 0 auto;
  `};
`

export default ProjectListSC
