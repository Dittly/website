import styled from 'styled-components'

const H1 = styled.h1`
  font-family: ${props => (props.secondary ? 'Rubik' : 'Roboto Slab')};
  text-align: ${props => (props.center ? 'center' : '')};
`

export default H1
