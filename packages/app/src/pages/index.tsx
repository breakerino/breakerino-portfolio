// --------------------------------------------------------------------- 
// Pages > Index
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { HEADER_LOGO, HEADER_MENU_ITEMS, SOCIAL_PROFILES } from '@/app/data';
import Wrapper from '@/components/Wrapper';
import Content from '@/components/Content';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Header from '@/sections/Header';
import HeroSection from '@/sections/Hero';
import AboutMeSection from '@/sections/AboutMe';
import Footer from '@/sections/Footer';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export type IndexProps = unknown
// --------------------------------------------------------------------- 

export default function Index() {
	return (
		<Wrapper>
			<Header logo={HEADER_LOGO} menuItems={HEADER_MENU_ITEMS} socialItems={SOCIAL_PROFILES} />
			<Content>
				<HeroSection />
				<AboutMeSection />
			</Content>
			<Footer />
		</Wrapper>
	);
}