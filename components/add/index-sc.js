import styled from 'styled-components';

import { colors, typography } from '../../styles/constants';

const AddSC = styled.button`
  font-family: ${typography.fontFamily};
  color: ${colors.brandBlue};
  font-size: 14px;

  background: transparent;
  border: none;

  cursor: pointer;
  user-select: none;
`;

export default AddSC;
