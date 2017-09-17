import styled from 'styled-components'
import {sizes, media} from '../../styles/media'

const ProjectListSC = styled.div`
  max-width: 375px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  ${media.phone`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    max-width: ${sizes.phone}px;
    margin: 0 auto;
  `};
  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: ${sizes.tablet}px;
    margin: 0 auto;
  `};
  ${media.desktop`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: ${sizes.desktop}px;
    margin: 0 auto;
  `};
  ${media.giant`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    max-width: ${sizes.giant}px;
    margin: 0 auto;
  `};
`

export default ProjectListSC
