// ---------------------------------------------------------------------
// Storybook > Decorators > Component
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import React from 'react';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import Wrapper from '@/components/Wrapper';
import RootDecorator from '@/storybook/decorators/root';
// ---------------------------------------------------------------------

const ComponentDecorator = (Story: React.FC) => {
	return (
		<RootDecorator>
			<Wrapper className="min-w-auto p-4 grid place-items-center bg-secondary-950 text-primary-50">
				<Story />
			</Wrapper>
		</RootDecorator>
	);
};

export default ComponentDecorator;