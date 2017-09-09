import styled from 'styled-components'

const AvatarSC = styled.div`
  display: inline-block;
  width: 27px;
  height: 27px;

  border-radius: 100%;

  overflow: hidden;

  img {
    object-fit: cover;
  }
`
export default AvatarSC
