import React, { FC, ReactNode } from 'react';
import { setup, styled } from 'goober';

setup(React.createElement);

export interface ResetProperties {
  children: ReactNode;
}

type Properties = ResetProperties;

const StyledReset = styled('div')`
  background: red;
`;

const Reset: FC<Properties> = ({ children }: Properties) => {
  return <StyledReset>{children}</StyledReset>;
};

export default Reset;
