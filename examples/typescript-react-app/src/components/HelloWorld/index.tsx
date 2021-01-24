import * as React from 'react';
import Text from '@pixeen/text';
import { setup } from 'goober';

setup(React.createElement);

const HelloWorld: React.FC = () => <Text>Pixeen Text</Text>;

export default HelloWorld;
