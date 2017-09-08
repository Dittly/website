import React from 'react'

const cardStyles = {
  backgroundColor: 'white',
  boxShadow: '0px 0px 5px 0px rgba(198,198,198,1)',
  maxWidth: '375px',
  borderRadius: '2px',
}

const Card = ({children}) => (
  <div style={cardStyles}>
    {children}
  </div>
)

Card.propTypes = {
  children: React.PropTypes
}

export default Card
