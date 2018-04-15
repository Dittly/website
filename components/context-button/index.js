import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContextButtonSC from './index-sc';

const Icon = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 27px;
    height: 26px;
  }
`;

const ContextButton = ({ children }) => (
  <ContextButtonSC>
    <Icon>
      <img src="../../static/mallet.png" alt="" />
    </Icon>
    {children}
  </ContextButtonSC>
);

ContextButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContextButton;
