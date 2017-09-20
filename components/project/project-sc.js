import styled from 'styled-components'

import {boxShadows, neutrals} from '../../styles/constants'

const ProjectSC = styled.div`
  background-color: ${neutrals.neutral00};
  box-shadow: ${boxShadows.soft};
  border-radius: 2px;

  img {
    object-fit: cover;
    width: 100%;
  }
`

export default ProjectSC
