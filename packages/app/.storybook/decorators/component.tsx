// ---------------------------------------------------------------------
// Storybook > Decorators > ComponentDecorator
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import React from 'react';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import Wrapper from '@/components/Wrapper';
// ---------------------------------------------------------------------

const ComponentDecorator = (Story: React.FC) => {
  return (
    <Wrapper className="min-w-auto p-4 grid place-items-center bg-secondary-950 text-primary-50">
      <Story />
    </Wrapper>
  );
};

export default ComponentDecorator;