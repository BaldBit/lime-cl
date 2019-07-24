import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .add('with text', () => (
    <Button
      value={text('Value', 'Lime Button')}
      mode={select('Mode', ['primary', 'secondary'], 'primary')}
      size={select('Size', ['regular', 'big'], 'regular')}
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
      fluid={boolean('Fluid', false)}
      onClick={action('button-click')}
    />
  ));
