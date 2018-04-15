import { storiesOf } from '@storybook/react';

import ProjectCreateForm from './create-form';

storiesOf('ProjectCreateForm', module).add('default', () => {
  const props = {
    projectTypes: ['Type One', 'Type Two'],
    onSubmit: () => {}
  };
  return <ProjectCreateForm {...props} />;
});
