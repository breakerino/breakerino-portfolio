// --------------------------------------------------------------------- 
// Components > Work experience list
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, WorkExperience } from '@/app/types';
import WorkExperienceItem from './WorkExperienceItem';
// --------------------------------------------------------------------- 

export interface WorkExperienceListProps extends Omit<BaseComponentProps, 'children'> {
	items: WorkExperience[]
}

const WorkExperienceList: React.FC<WorkExperienceListProps> = ({ className, as: Tag = 'ul', items }) => {
	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-work-experience-list',
					'flex flex-col gap-4',
					className
				)
			)}
		>
			{items.map((item, index) => (
				<WorkExperienceItem
					key={`work-experience_${index}`}
					as="li"
					{...item}
				/>
			))}
		</Tag>
	)
}

export default WorkExperienceList;