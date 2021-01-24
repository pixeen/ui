import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '@pixeen/text';

it('renders correctly', () => {
  const tree = shallow(<Text>text</Text>);
  expect(toJson(tree)).toMatchSnapshot();
});
