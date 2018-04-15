import { configure } from '@storybook/react';

const req = require.context('../components', true, /\-stories\.js$/);

// Adds normalize and general styles
import '../styles/base-styles';

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
