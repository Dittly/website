import {css} from 'styled-components'
import {media} from '../media'

export default css`
  html {
    font-size: 14px;
    line-height: 1.3;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
      
    ${media.hlfScreen`
      font-size: 16px;
      line-height: 1.15;
    `}
  }

  h1 {
    font-size: 22px;
      
    ${media.hlfScreen`
      font-size: 28px;
    `}
  }
`
