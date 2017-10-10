import styled from 'styled-components'

const ButtonSC = styled.button`
  background-color: ${props => (props.primary ? '#1A5CCF' : '#F9593C')};
  font-family: ${props => (props.primary ? 'Rubik' : 'Roboto Slab')};
  font-size: ${props => (props.primary ? '16px' : '20px')};

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

  color: inherit;
  border: 0;

  border-radius: 3px;
  outline: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.35);
  color: white;
  font-weight: bold;
  letter-spacing: 0.8px;
`

export default ButtonSC
