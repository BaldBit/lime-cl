import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../Loader';

it('renders correctly', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
