// --------------------------------------------------------------------- 
// Components > Icons
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { ICON_SET_URI } from '@/app/constants';
// --------------------------------------------------------------------- 

export interface IconsProps {
	shouldLoad?: boolean;
}

const Icons: React.FC<IconsProps> = ({ shouldLoad = true }) => {
	const [svgContents, setSVGContents] = React.useState<string | null>(null)

	React.useEffect(() => {
		if (shouldLoad && !svgContents) {
			try {
				loadIcons();
			} catch (error) {
				console.error('An error occured while loading icons:', error);
			}
		}
	}, [shouldLoad])

	const loadIcons = async () => {
		const response = await fetch(ICON_SET_URI)
		const contents = await response.text();

		setSVGContents(contents);
	}

	if (!svgContents) {
		return null;
	}

	return (
		<div
			style={{ width: 0, height: 0, position: 'absolute', overflow: 'hidden', pointerEvents: 'none' }}
			dangerouslySetInnerHTML={{ __html: svgContents }}
		/>
	)
}

export default Icons;