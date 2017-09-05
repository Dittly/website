import styled from 'styled-components'
import { sizes, neutrals, colors, typography } from '../../styles/constants'
import { media } from '../../styles/media'

const ButtonSC = styled.button`
  background-color: ${props => props.primary ? '#1A5CCF' : '#F9593C'};
  font-family: ${props => props.primary ? 'Rubik' : 'Roboto Slab'};

  line-height: normal;

  display: inline-block;

  min-width: 52px;
  min-height: 52px;
  margin: 0;
  padding: 0.25em 1em;

  cursor: pointer;
  user-select: none;

  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  color: inherit;
  border: 0;

  border-radius: 5px;
  outline: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  box-shadow: 0px 0px 5px 0px rgba(77,77,77,1);
  color: white;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 16px;

  ${ media.tablet`
    box-shadow: none;
    border-radius: 0;
    width: 30%;
    min-width: 40px !important; 
    min-height: 40px !important;
  ` }
  `

export default ButtonSC