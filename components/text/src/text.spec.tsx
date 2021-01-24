import * as React from 'react';
import renderer from 'react-test-renderer';
import Text from './text';
import { setup } from 'goober';
setup(React.createElement);

describe('Text', function () {
  test('should render component properly', () => {
    // // given
    // const dummyComponentProps = {
    //   bar: 'test',
    //   foo: 'lorem',
    // };

    // when
    const componentRenderer = renderer.create(<Text>text2</Text>);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
