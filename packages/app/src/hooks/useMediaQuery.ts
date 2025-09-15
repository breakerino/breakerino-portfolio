// --------------------------------------------------------------------- 
// Hooks > Media Query
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useState, useEffect } from 'react';
// --------------------------------------------------------------------- 

export function useMediaQuery(query: string, defaultValue = false) {
	const [matches, setMatches] = useState(defaultValue);

	useEffect(() => {
		if (typeof window === 'undefined' || !window.matchMedia) return;

		const mediaQuery = window.matchMedia(query);

		setMatches(mediaQuery.matches);

		const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
		mediaQuery.addEventListener('change', handler);

		return () => mediaQuery.removeEventListener('change', handler);
	}, [query]);

	return [matches];
}