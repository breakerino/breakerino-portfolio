// --------------------------------------------------------------------- 
// Components > SkillsList
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Skill as SkillType } from '@/app/types';
import Skill, { SkillItemVariant, SkillItemSize } from '@/components/SkillItem';
// --------------------------------------------------------------------- 

export interface SkillsListProps extends Omit<BaseComponentProps, 'children'> {
	skills: SkillType[];
	variant?: SkillItemVariant;
	size?: SkillItemSize;
}

const SkillsList: React.FC<SkillsListProps> = ({ className, skills, as: Tag = 'ul', variant, size }) => {
	const sortedSkills = React.useMemo(() => {
		return skills.sort((a, b) => a.order > b.order ? 1 : -1);
	}, [skills]);
	
	const sizes: Record<SkillItemSize, string> = {
		small: 'gap-2',
		medium: 'gap-2.5',
		large: 'gap-3'
	}

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-skills-list',
					'flex flex-wrap',
					sizes[size ?? 'medium'],
					className
				)
			)}
		>
			{sortedSkills.map(skill => (
				<Skill key={skill.name} as="li" {...{...skill, variant, size}} />
			))}
		</Tag>
	)
}

export default SkillsList;