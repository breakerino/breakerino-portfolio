// --------------------------------------------------------------------- 
// Components > Skills list
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useInView, Variants } from 'motion/react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Skill } from '@/app/types';
import SkillItem, { MotionSkillItem, SkillItemProps } from '@/components/SkillItem';
// --------------------------------------------------------------------- 

export interface SkillsListProps extends Omit<BaseComponentProps, 'children'> {
	skills: Skill[];
	variant?: SkillItemProps['variant'];
	size?: SkillItemProps['size'];
	slideshow?: boolean;
	animated?: boolean;
}

const SkillsList: React.FC<SkillsListProps> = ({
	className,
	as = 'ul',
	variant, size,
	skills: passedSkills,
	slideshow = false,
	animated = false
}) => {
	const containerRef = React.useRef(null)
	const splideRef = React.useRef<Splide>(null)
	const isInView = useInView(containerRef, { once: true, margin: '10% 0px' })
	const isPartiallyInView = useInView(containerRef, { once: false, margin: '10% 0px', amount: 'some' });

	const skills = React.useMemo(() => {
		return passedSkills.sort((a, b) => a.order > b.order ? 1 : -1);
	}, [passedSkills]);

	const Tag = (as as unknown) as React.ElementType
	const Item = animated ? MotionSkillItem : SkillItem;

	const motionVariants: Variants = {
		initial: { y: '10%', opacity: 0 },
		animate: (i: number) => ({
			y: '0%',
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: 'easeInOut',
				delay: i * 0.075
			}
		})
	}

	const sizes: Record<NonNullable<SkillItemProps['size']>, string> = {
		sm: 'gap-2',
		md: 'gap-2.5',
		lg: 'gap-3'
	}

	React.useEffect(() => {
		if (!splideRef.current?.splide) {
			return;
		}

		const splide = splideRef.current.splide;

		if (isPartiallyInView) {
			splide.Components.AutoScroll?.play();
		} else {
			splide.Components.AutoScroll?.pause();
		}

		return () => {
			splide.Components.AutoScroll?.pause();
		};
	}, [isPartiallyInView]);

	if (slideshow) {
		return (
			<div
				ref={containerRef}
				className={twMerge(
					clsx(
						'brk-skills-list',
						className
					)
				)}
			>
				<Splide
					ref={splideRef}
					hasTrack={false}
					aria-label="Skills list"
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
						{skills.map((skill, index) => (
							<SplideSlide key={`skill_${index}`}>
								<SkillItem {...{ ...skill, variant, size }} />
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>
			</div>
		)
	}

	return (
		<Tag
			ref={containerRef}
			className={twMerge(
				clsx(
					'brk-skills-list',
					'flex flex-wrap',
					sizes[size ?? 'md'],
					className
				)
			)}
		>
			{skills.map((skill, index) => (
				<Item
					key={skill.name}
					as="li"
					{...(animated ? {
						variants: motionVariants,
						initial: 'initial',
						animate: isInView ? 'animate' : 'initial',
						custom: index
					} : {})}
					{...{ ...skill, variant, size }}
				/>
			))}
		</Tag>
	)
}

export default SkillsList;