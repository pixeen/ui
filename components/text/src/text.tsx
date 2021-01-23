import React, { FC } from 'react';
import { setup, styled } from 'goober';
import Reset from '../../reset/src';

setup(React.createElement);

const StyledText = styled('h1')(() => {
  return {
    backgroundColor: 'red',
  };
});

const Text: FC = () => {
  return (
    <>
      <Reset />
      <StyledText>TEXT</StyledText>
    </>
  );
};

export default Text;
