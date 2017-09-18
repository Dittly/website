import styled from 'styled-components'

import {media} from '../../styles/media'

const DesktopSlide = styled.div`
  display: none;

  img {
    width: 100%;
  }
  ${media.phone`
    display: block;
  `};
`

export const Journey = () => (
  <div>
    <DesktopSlide>
      <img src="https://unsplash.it/400/?random" alt="alt text" />
    </DesktopSlide>
  </div>
)

export default Journey
