// --------------------------------------------------------------------- 
// Hooks > Dimensions
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
// --------------------------------------------------------------------- 

export interface Dimensions {
	width: number;
	height: number;
}

export function useDimensions<T extends HTMLElement>(ref: React.RefObject<T | null>) {
	const [dimensions, setDimensions] = React.useState<Dimensions>({
		width: 0,
		height: 0
	});

	React.useLayoutEffect(() => {
		const node = ref.current;

		if (!node) {
			return;
		}

		const measureDimensions = () => {
			const { width, height } = node.getBoundingClientRect();
			setDimensions({ width, height });
		};

		measureDimensions();

		const resizeObserver = new ResizeObserver(measureDimensions);
		resizeObserver.observe(node);

		return () => {
			resizeObserver.disconnect();
		};
	}, [ref]);

	return dimensions;
}