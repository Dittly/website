import Box from '../box'
import {Link} from '../../utils/routes'
import {authRoutes, homeRoutes} from '../../utils/routes/routes-definitions'
import {colors} from '../../utils/routes/routes-definitions'
import SearchIcon from '../../static/search.svg';

const SearchContainer = styled.div`
  border-bottom: 1px solid ${colors.neutral15};
  background-color: ${colors.neutral00};
`;

const Icon = styled.div`
  width: 14px;
  height: 14px;
  display: inline-block;
`;

const SearchInput = styled.input`
  display: inline-block;
`;

const Search = () => (
  <SearchContainer>
    <SearchIcon />
    <SeachInput />
  </SearchContainer>
    
)

export default Search;
