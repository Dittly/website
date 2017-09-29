import styled from 'styled-components'
import {neutrals} from '../../styles/constants'
import SearchSC from './index-sc'

const SearchIcon = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
`

const SearchInput = styled.input`
  display: inline-block;
  padding: 12px 12px 12px 0;
  width: 100%;
  margin-left: 12px;
  resize: none;
  background-color: transparent;
  -webkit-appearance: none;

  border: 0;

  font-family: Rubik;
  color: ${neutrals.neutral50};
  font-size: 14px;

  &::placeholder {
    color: ${neutrals.neutral40};
  }
`

const Search = () => (
  <SearchSC>
    <SearchIcon>
      <img src="/static/search.png" alt="magnifying glass" />
    </SearchIcon>
    <SearchInput placeholder="Search" type="text" />
  </SearchSC>
)

export default Search
