import React, { FC, ReactNode } from 'react';
import Reset from '@pixeen/reset';

interface TextProperties {
  children: ReactNode;
}

type Properties = TextProperties;

const Text: FC<Properties> = ({ children }: Properties) => {
  return (
    <Reset>
      <div>{children}</div>
    </Reset>
  );
};

export default Text;
