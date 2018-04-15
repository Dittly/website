import styled from 'styled-components';
import { colors } from '../../styles/constants';

const ContextButtonSC = styled.button`
  min-height: 47px;
  width: 72px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${colors.brandBlue};

  line-height: normal;

  display: inline-block;

  cursor: pointer;
  user-select: none;

  text-align: center;

  color: ${colors.brandBlue};

  outline: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default ContextButtonSC;
