import styled from 'styled-components';

import { border, neutrals } from '../../styles/constants';

const Input = styled.input`
  display: inline-block;
  padding: 12px;
  margin: 4px 0;
  width: 100%;
  resize: none;
  -webkit-appearance: none;

  border: 1px solid ${neutrals.neutral40};
  border-radius: ${border.radius};

  font-family: Rubik;
  color: ${neutrals.neutral50};
  font-size: 14px;

  &::placeholder {
    color: ${neutrals.neutral40};
  }
`;

export default Input;
