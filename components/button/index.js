import PropTypes from 'prop-types';

import ButtonSC from './index-sc';

const Button = (props) => <ButtonSC {...props}>{props.children}</ButtonSC>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
