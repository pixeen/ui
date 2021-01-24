import * as React from 'react';
import renderer from 'react-test-renderer';
import Reset from './index';
import { setup } from 'goober';
setup(React.createElement);

describe('Reset', function () {
  test('should render component properly', () => {
    // // given
    // const dummyComponentProps = {
    //   bar: 'test',
    //   foo: 'lorem',
    // };

    // when
    const componentRenderer = renderer.create(<Reset>reset</Reset>);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
