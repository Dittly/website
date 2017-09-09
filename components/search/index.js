import styled from 'styled-components'
import {neutrals} from '../../styles/constants'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  background-color: ${neutrals.neutral00};

  border-bottom: 1px solid ${neutrals.neutral15};

  font-family: Rubik;
  color: ${neutrals.neutral40};
  font-size: 14px;
`

const SearchIcon = styled.div`
  display: flex;
  width: 27px;
  height: 27px;
`

const SearchInput = styled.input`
  display: inline-block;
  padding: 12px 12px 12px 0;
  width: 100%;
  resize: none;
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
  <SearchContainer>
    <SearchIcon>
      <image src="../../static/search.svg" />
    </SearchIcon>
    <SearchInput placeholder="Search projects" type="text" />
  </SearchContainer>
)

export default Search
