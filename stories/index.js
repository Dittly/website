import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Search from './Search';
import Create from './Create';
import TabBar from './TabBar';

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Search', module)
  .add('with text', () => <Search>Search</Search>);

storiesOf('Create', module)
  .add('with text', () => <Create></Create>);

storiesOf('TabBar', module)
  .add('with text', () => <TabBar></TabBar>);