import React from 'react';
import styled from 'styled-components'

import Avatar from '../avatar';

const ProfileSC = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.span`
  font-size: 12px;
  color: #4A4A4A;
  font-family: Rubik;
  display: block;
  margin-left: 4px;
`

const Time = styled.time`
  font-size: 8px;
  color: #9B9B9B;
  font-family: Rubik;
  margin-left: 4px;
  line-height: 2;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Profile = ({userName}) => (
  <ProfileSC>
    <Avatar />
    <FlexContainer>
      <Name>{userName}</Name>
      <Time>Time</Time>
    </FlexContainer>
  </ProfileSC>
);

export default Profile;
