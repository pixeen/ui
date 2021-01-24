import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Reset from '@pixeen/reset';

it('renders correctly', () => {
  const tree = shallow(<Reset>reset</Reset>);
  expect(toJson(tree)).toMatchSnapshot();
});

test('hello world', () => {
  render(<p>Hello Jest!</p>);
  expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
});
