import * as React from 'react';
import { create } from 'react-test-renderer';
import Reset from './index';
import { setup } from 'goober';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

setup(React.createElement);

describe('Reset', function () {
  it('should render component', () => {
    const componentRenderer = create(<Reset>reset</Reset>);
    const tree = componentRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have reset styles applied', () => {
    const { getByText } = render(<Reset>reset</Reset>);
    expect(getByText('reset')).toHaveStyle({ margin: 0 });
    expect(getByText('reset')).toHaveStyle({ padding: 0 });
    expect(getByText('reset')).toHaveStyle({ border: 0 });
    expect(getByText('reset')).toHaveStyle({ verticalAlign: 'baseline' });
    expect(getByText('reset')).toHaveStyle({ fontSize: '100%' });
    expect(getByText('reset')).toHaveStyle({ font: 'inherit' });
  });
});
