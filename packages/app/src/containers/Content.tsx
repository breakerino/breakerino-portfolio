// --------------------------------------------------------------------- 
// Containers > Content
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { useSections } from '@/hooks/useSections';
import { BaseComponentProps, SectionType } from '@/app/types';
// --------------------------------------------------------------------- 

export interface ContentProps extends BaseComponentProps {
	data: {
		id: SectionType,
		data: Record<string, unknown>
	}[]
}

const Content: React.FC<ContentProps> = ({ className, data }) => {
	const sections = useSections(data);

	return (
		<main
			id="main"
			className={twMerge(
				clsx(
					'brk-content',
					'@container/content flex flex-col',
					className
				)
			)}
		>
			{sections.map(({ id, Section, data }) => (
				<Section key={id} {...{ ...data, id }} />
			))}
		</main>
	)
}

export default Content;