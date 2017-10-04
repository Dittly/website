import {storiesOf} from '@storybook/react'

import ProjectCreateForm from './components/create-form'

storiesOf('ProjectCreateForm', module).add('default', () => {
  const props = {
    projectTypes: ['Type One', 'Type Two'],
    onSubmit: () => {}
  }
  return <ProjectCreateForm {...props} />
})
