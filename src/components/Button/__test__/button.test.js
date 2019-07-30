import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

it('renders correctly', () => {
  const wrapper = shallow(<Button value="button" />);
  expect(wrapper).toMatchSnapshot();
});
