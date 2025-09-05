// --------------------------------------------------------------------- 
// Components > Skills list
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Skill as SkillType } from '@/app/types';
import Skill, {SkillItemProps} from '@/components/SkillItem';
// --------------------------------------------------------------------- 

export interface SkillsListProps extends Omit<BaseComponentProps, 'children'> {
	skills: SkillType[];
	variant?: SkillItemProps['variant'];
	size?: SkillItemProps['size'];
}

const SkillsList: React.FC<SkillsListProps> = ({ className, skills: passedSkills, as: Tag = 'ul', variant, size }) => {
	const skills = React.useMemo(() => {
		return passedSkills.sort((a, b) => a.order > b.order ? 1 : -1);
	}, [passedSkills]);
	
	const sizes: Record<NonNullable<SkillItemProps['size']>, string> = {
		sm: 'gap-2',
		md: 'gap-2.5',
		lg: 'gap-3'
	}

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-skills-list',
					'flex flex-wrap',
					sizes[size ?? 'md'],
					className
				)
			)}
		>
			{skills.map(skill => (
				<Skill key={skill.name} as="li" {...{...skill, variant, size}} />
			))}
		</Tag>
	)
}

export default SkillsList;