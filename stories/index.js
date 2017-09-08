import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Search from './Search';
import Create from './Create';
import TabBar from './TabBar';
import AddPost from './AddPost';
import Post from './Post';

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Search', module)
  .add('with text', () => <Search></Search>);

storiesOf('Create', module)
  .add('with text', () => <Create></Create>);

storiesOf('TabBar', module)
  .add('with text', () => <TabBar></TabBar>);

storiesOf('AddPost', module)
  .add('with text', () => <AddPost></AddPost>);

storiesOf('Post', module)
  .add('with text', () => <Post></Post>);