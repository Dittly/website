import { css } from 'styled-components'
import { neutrals, typography } from '../constants'
import { media } from '../media'

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    font-family: ${typography.fontFamily};
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    color: ${neutrals.neutral40};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  video {
    display: block;
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`
