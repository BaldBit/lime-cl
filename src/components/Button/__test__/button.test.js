import React from 'react';
import { mount } from 'enzyme';

import Button from '../Button';

it('renders button with primary mode', () => {
  const wrapper = mount(<Button value="button" />);
  expect(wrapper).toMatchSnapshot();
});

it('Render button with primary mode in disabled state', () => {
  const wrapper = mount(<Button value="button" disabled />);
  expect(wrapper).toMatchSnapshot();
});

it('Render button with secondary mode', () => {
  const wrapper = mount(<Button value="button" mode="secondary" />);
  expect(wrapper).toMatchSnapshot();
});

it('Render button with secondary mode in disabled state', () => {
  const wrapper = mount(<Button value="button" mode="secondary" disabled />);
  expect(wrapper).toMatchSnapshot();
});

it('Render button without a mode (neutral)', () => {
  const wrapper = mount(<Button value="button" mode="neutral" />);
  expect(wrapper).toMatchSnapshot();
});

it('Render button with fluid prop', () => {
  const wrapper = mount(<Button value="button" fluid />);
  expect(wrapper).toMatchSnapshot();
});

it('Render button Loader component', () => {
  const wrapper = mount(<Button value="button" loading />);
  expect(wrapper.find('Loader')).toHaveLength(1);
});
