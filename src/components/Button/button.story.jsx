import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Button from './Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Button
    value={text('Value', 'Lime Button')}
    mode={select('Mode', ['primary', 'secondary', 'neutral'], 'primary')}
    size={select('Size', ['regular', 'big'], 'regular')}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
    fluid={boolean('Fluid', false)}
    onClick={action('button-click')}
  />
));
