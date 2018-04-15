import styled from 'styled-components';

import { media } from '../../styles/media';

const TabBarSC = styled.div`
  display: flex;
  width: 100%;

  position: fixed;
  bottom: 0;

  background-color: white;
  border-top: 1px solid #ededed;

  ${media.tablet`
    display: none;
  `};
`;

export default TabBarSC;
