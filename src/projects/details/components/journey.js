import styled from 'styled-components'

import {media, sizes} from '/styles/media'
import Post from '/components/post'
import AddPost from '/components/add-post'
import Card from '/components/card'

const DesktopSlide = styled.div`
  display: none;

  img {
    width: 100%;
  }
  ${media.phone`
    display: block;
  `};
`

const JourneySC = styled.div`
  max-width: ${sizes.tablet}px;
  margin: 0 auto;
  ${media.hlfScreen`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  `};
`

const OneCol = styled.div`grid-column: 1;`

const TwoCol = styled.div`grid-column: 2 / 4;`

export const Journey = () => (
  <JourneySC>
    <OneCol>
      <DesktopSlide>
        <Card>
          <small>Featured</small>
          <img src="https://unsplash.it/400/?random" alt="alt text" />
        </Card>
      </DesktopSlide>
    </OneCol>
    <TwoCol>
      <AddPost />
      <Post />
    </TwoCol>
  </JourneySC>
)

export default Journey
