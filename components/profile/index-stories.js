import { storiesOf } from '@storybook/react';

import Profile from '.';

storiesOf('Profile', module).add('default', () => (
  <Profile userName="Test User" />
));
