import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from '../avatar'

const ProfileSC = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.span`
  display: block;
  margin-left: 4px;

  font-size: 12px;
  color: #4a4a4a;
  font-family: Rubik;
`

const Time = styled.time`
  margin-left: 4px;

  font-size: 8px;
  color: #9b9b9b;
  font-family: Rubik;
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
)

Profile.propTypes = {
  userName: PropTypes.string.isRequired
}

export default Profile
