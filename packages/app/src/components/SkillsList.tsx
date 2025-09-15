// --------------------------------------------------------------------- 
// Components > Skills list
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Skill as SkillType } from '@/app/types';
import Skill, { SkillItemProps } from '@/components/SkillItem';
// --------------------------------------------------------------------- 

export interface SkillsListProps extends Omit<BaseComponentProps, 'children'> {
	skills: SkillType[];
	variant?: SkillItemProps['variant'];
	size?: SkillItemProps['size'];
	slideshow?: boolean;
}

const SkillsList: React.FC<SkillsListProps> = ({ className, skills: passedSkills, as: Tag = 'ul', variant, size, slideshow = false }) => {
	const skills = React.useMemo(() => {
		return passedSkills.sort((a, b) => a.order > b.order ? 1 : -1);
	}, [passedSkills]);

	const sizes: Record<NonNullable<SkillItemProps['size']>, string> = {
		sm: 'gap-2',
		md: 'gap-2.5',
		lg: 'gap-3'
	}

	if (slideshow) {
		return (
			<Splide
				className={twMerge(
					clsx(
						'brk-skills-list',
						className
					)
				)}
				aria-label="Skills list"
				hasTrack={false}
				options={{
					type: 'loop',
					drag: 'free',
					focus: 'center',
					pagination: false,
					arrows: false,
					autoWidth: true,
					gap: `calc(var(--spacing) * ${sizes[size ?? 'md'].replace('gap-', '')})`,
					autoScroll: {
						speed: 1
					},
				}}
				extensions={{ AutoScroll }}
			>
				<SplideTrack>
					{skills.map(skill => (
						<SplideSlide key={skill.name}>
							<Skill {...{ ...skill, variant, size }} />
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
		)
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
				<Skill key={skill.name} as="li" {...{ ...skill, variant, size }} />
			))}
		</Tag>
	)
}

export default SkillsList;