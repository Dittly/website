import CardSC from './index-sc'

const Card = ({ children }) => (
  <CardSC>
    {children}
  </CardSC>
);

Card.propTypes = {
  children: React.PropTypes
};

export default Card;
