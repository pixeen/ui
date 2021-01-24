import * as React from 'react';
import { FC, ReactNode } from 'react';
import { styled } from 'goober';

export interface ResetProperties {
  children: ReactNode;
}

type Properties = ResetProperties;

const StyledReset = styled('div')(() => ({
  margin: 0,
}));

const Reset: FC<Properties> = ({ children }: Properties) => {
  return <StyledReset>{children}</StyledReset>;
};

export default Reset;
