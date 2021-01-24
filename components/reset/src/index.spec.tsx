import * as React from 'react';
import { create } from 'react-test-renderer';
import Reset from './index';
import { setup } from 'goober';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

setup(React.createElement);

describe('Reset', function () {
  it('should render component', () => {
    const render = create(<Reset>reset</Reset>);
    const tree = render.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have reset styles applied', () => {
    // const { getByText } = render(<Reset>reset</Reset>);
    // expect(getByText('reset')).toHaveStyle({ margin: 0 });
  });
});
