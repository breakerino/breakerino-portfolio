// --------------------------------------------------------------------- 
// Hooks > Active section
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import debounce from 'lodash/debounce';
import { isElementVisible } from '@/app/functions';
// --------------------------------------------------------------------- 

export interface UseNavigationProps {
	selector: string;
	threshold?: number;
	delay?: number;
}

const useActiveSection = ({ selector, threshold = 0.25, delay = 50 }: UseNavigationProps) => {
	const [activeSection, setActiveSection] = React.useState<string | null>(null);

	const sections = React.useMemo(() => {
		if (typeof window === 'undefined') {
			return [];
		}

		return [...document.querySelectorAll(selector)];
	}, [selector]);

	React.useEffect(() => {
		if (typeof window === 'undefined') return;

		const onScroll = debounce(() => {
			const sectionInView = sections.findLast((section) => isElementVisible(section, threshold));
			setActiveSection(sectionInView?.id ?? null);
		}, delay);

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			onScroll.cancel();
		};
	}, [sections, threshold, delay]);

	return [activeSection];
};

export default useActiveSection;
