import { css } from 'styled-components';
import { neutrals, typography } from '../constants';
import { media } from '../media';

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background-color: ${neutrals.neutral20};
  }

  body {
    overflow-x: hidden;
    font-family: ${typography.fontFamily};
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
    color: ${neutrals.neutral50};
    padding-bottom: 44px;

    ${media.hlfScreen`
      padding-bottom: 0
    `};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${typography.headerFontFamily};
    font-weight: 500;
  }

  a {
    text-decoration: none;
    cursor: pointer;
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
`;
