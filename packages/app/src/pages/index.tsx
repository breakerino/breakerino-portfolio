// --------------------------------------------------------------------- 
// Pages > Index
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Header from '@/components/Header';
// --------------------------------------------------------------------- 

import { HEADER_LOGO, HEADER_MENU_ITEMS, SOCIAL_PROFILES } from '@/app/data';
import Wrapper from '@/components/Wrapper';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export type IndexProps = unknown
// --------------------------------------------------------------------- 

export default function Index() {
	return (
		<Wrapper>
			<Header logo={HEADER_LOGO} menuItems={HEADER_MENU_ITEMS} socialItems={SOCIAL_PROFILES} />
		</Wrapper>
	);
}