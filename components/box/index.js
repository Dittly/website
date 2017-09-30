import styled from 'styled-components'
import {space, width, fontSize, color} from 'styled-system'

export default styled.div`
  display: ${props => (props.flex ? 'flex' : '')};
  align-items: ${props => (props.center ? 'center' : '')};
  ${space} ${width} ${fontSize} ${color};
`
