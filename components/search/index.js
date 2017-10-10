import styled from 'styled-components'
import {neutrals} from '../../styles/constants'
import SearchSC from './index-sc'

const SearchInput = styled.input`
  display: inline-block;
  padding: 12px 12px 12px 40px;
  width: 100%;
  height: 100%;
  resize: none;
  background-color: transparent;
  -webkit-appearance: none;
  background: url('/static/search.svg') no-repeat;
  background-size: 22px;
  background-position: 12px center;

  border: 0;

  font-family: Rubik;
  color: ${neutrals.neutral50};
  font-size: 14px;

  &::placeholder {
    color: ${neutrals.neutral40};
  }
`

const Search = props => (
  <SearchSC {...props}>
    <SearchInput placeholder="Search" type="text" />
  </SearchSC>
)

export default Search
