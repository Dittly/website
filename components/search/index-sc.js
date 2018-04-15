import styled from 'styled-components';

import { neutrals } from '/styles/constants';
import { media } from '/styles/media';

const SearchSC = styled.div`
  background-color: ${(props) => (props.mobile ? 'white' : '#F2F2F2')};
  width: ${(props) => (props.mobile ? '100%' : '314px')};
  height: 100%;

  display: ${(props) => (props.mobile ? 'flex' : 'none')};
  align-items: center;

  position: relative;

  border-bottom: 1px solid ${neutrals.neutral15};

  font-family: Rubik;
  color: ${neutrals.neutral40};
  font-size: 14px;

  ${media.phone`
    display: ${(props) => (props.mobile ? 'none' : 'inline-flex')};
    height: 55px;
  `};
`;

export default SearchSC;
