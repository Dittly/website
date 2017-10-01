import styled from 'styled-components'
import {space, width, fontSize, color} from 'styled-system'

export default styled.div`
  margin: ${props => (props.center ? '0 auto' : '')};

  ${space} ${width} ${fontSize} ${color};
`
