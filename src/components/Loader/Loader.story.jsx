import React from 'react';
import keys from 'lodash-es/keys';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import Loader from './Loader';
import limeLight from '../Theme/limeLight';

const stories = storiesOf('Loader', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const speed = select('Speed', keys(limeLight.animation), 'medium');

  return (
    <Loader
      size={select('Size', ['regular', 'big'], 'regular')}
      speed={limeLight.animation[speed]}
      thickness={number('Thickness', limeLight.loader.thickness)}
      color={select('Color', ['red', 'blue', 'green'], 'red')}
    />
  );
});
