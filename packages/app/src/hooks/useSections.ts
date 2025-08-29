// --------------------------------------------------------------------- 
// Hooks > useSections
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { ContentProps } from '@/containers/Content';
import { SectionData, SectionType } from '@/app/types';
import { SECTION_COMPONENT_MAP } from '@/app/constants';
// --------------------------------------------------------------------- 

export interface Section {
	id: SectionType;
	data: SectionData;
	Section: React.ComponentType<unknown>;
}

export function useSections(sections: ContentProps['data']) {
	return sections.map(({ id, data }) => ({ id, data, Section: SECTION_COMPONENT_MAP[id] })).filter(Boolean) as Section[];
}