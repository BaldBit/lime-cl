import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';

const components = require.context('../src/components', true, /\.story.jsx$/);

function loadStories() {
  components.keys().forEach((filename) => components(filename));
}

addParameters({
  options: {
    theme: themes.light,
  },
});

addDecorator(
  withInfo({
    inline: true,
  })
);

configure(loadStories, module);
