import { css } from 'styled-components'
import { neutrals, typography } from '../constants'

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    overflow: hidden;
    height: 100%;
    background-color: ${neutrals.neutral10};
  }

  body {
    font-family: ${typography.fontFamily};
    font-weight: 400;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    color: #3D3D3D;
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
