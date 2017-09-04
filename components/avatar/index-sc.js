import styled from 'styled-components'

const AvatarSC = styled.div`
  border-radius: 100%;
  display: inline-block;
  width: 27px;
  height: 27px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`
export default AvatarSC