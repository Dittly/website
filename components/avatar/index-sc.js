import styled from 'styled-components';

const AvatarSC = styled.div`
  width: ${(props) => (props.large ? '75px' : '27px')};
  height: ${(props) => (props.large ? '75px' : '27px')};
  display: inline-block;

  border-radius: 100%;

  overflow: hidden;

  img {
    object-fit: cover;
  }
`;
export default AvatarSC;
