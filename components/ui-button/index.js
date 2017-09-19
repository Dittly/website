import styled from 'styled-components'
import PropTypes from 'prop-types'

const UiButtonSC = styled.button`
  background-color: #196dc8;
  border: none;
  padding: 8px 28px;
  color: white;
  box-shadow: 0px 0px 5px 0px rgba(198;198;198;1);
  border-radius: 5px;
  font-family: Rubik;
  font-weight: 400;
  font-size: 14px;
`

const UiButton = ({children, onClick}) => (
  <UiButtonSC onClick={onClick}>{children}</UiButtonSC>
)

UiButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default UiButton
