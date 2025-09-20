// ---------------------------------------------------------------------
// Storybook > Decorators > Page
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import React from 'react';
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
import Wrapper from '@/components/Wrapper';
import RootDecorator from '@/storybook/decorators/root';
// ---------------------------------------------------------------------

const PageDecorator = (Story: React.FC) => {
	return (
		<RootDecorator>
			<Wrapper className="bg-secondary-950 text-primary-50">
				<Story />
			</Wrapper>
		</RootDecorator>
	);
};

export default PageDecorator;