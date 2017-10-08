import {storiesOf} from '@storybook/react'

import ProjectDetails from './details'

storiesOf('ProjectDetails', module).add('default', () => {
  const props = {
    id: '1',
    location: 'Vancouver, BC',
    title: 'Project Title',
    type: 'Type',
    user: {
      name: 'Test User'
    }
  }
  return <ProjectDetails {...props} />
})
