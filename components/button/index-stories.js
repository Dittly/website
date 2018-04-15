import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
  .add('default', () => <Button>A button</Button>)
  .add('primary', () => <Button primary>A button</Button>);
