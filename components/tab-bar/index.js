import styled from 'styled-components'

import TabBarSC from './index-sc'
import Avatar from '../avatar'

const SearchIcon = styled.div`
  display: flex;
  width: 27px;
  height: 27px;
`

const TabBarButton = styled.button`
  background-color: white;
  border: none;
  font-family: Rubik;
  color: #9b9b9b;
  font-size: 14px;
  width: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
`

const TabBar = () => (
  <TabBarSC>
    <TabBarButton>
      <SearchIcon>
        <img src="../../static/search.svg" alt="search" />
      </SearchIcon>
    </TabBarButton>
    <TabBarButton>
      <Avatar />
    </TabBarButton>
  </TabBarSC>
)

export default TabBar
