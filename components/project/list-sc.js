import styled from 'styled-components';
import { sizes, media } from '../../styles/media';

const ProjectListSC = styled.div`
  max-width: 375px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  ${media.phone`
    grid-template-columns: repeat(2, 1fr);
    max-width: ${sizes.phone}px;
  `};
  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
    max-width: ${sizes.tablet}px;
  `};
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
    max-width: ${sizes.desktop}px;
  `};
  ${media.giant`
    grid-template-columns: repeat(4, 1fr);
    max-width: ${sizes.giant}px;
  `};
`;

export default ProjectListSC;
