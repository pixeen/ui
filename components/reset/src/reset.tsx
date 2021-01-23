import React, { FC } from 'react';
import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';

setup(React.createElement);

const GlobalStyles = createGlobalStyles`
  body { background: green; }
`;

const Reset: FC = () => {
  return <GlobalStyles>RESET</GlobalStyles>;
};

export default Reset;
