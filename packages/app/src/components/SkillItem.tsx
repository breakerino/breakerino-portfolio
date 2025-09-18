// --------------------------------------------------------------------- 
// Components > Skill item
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { motion } from 'motion/react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Skill } from '@/app/types';
import Icon from '@/components/Icon';
// --------------------------------------------------------------------- 

export interface SkillItemProps extends Omit<BaseComponentProps, 'children'>, Omit<Skill, 'id'|'order'> {
	variant?: 'rounded' | 'chip';
	size?: 'sm' | 'md' | 'lg';
}

const SkillItem: React.FC<SkillItemProps> = ({
	className,
	name,
	icon,
	size = 'md',
	variant = 'rounded',
	as: Tag = 'div',
	...props
}) => {
	const variants: Record<NonNullable<SkillItemProps['variant']>, string> = {
		rounded: 'rounded-lg',
		chip: 'rounded-full'
	}

	const sizes: Record<NonNullable<SkillItemProps['size']>, { wrapper: string, icon: string; text: string }> = {
		sm: { icon: 'w-5 h-5', text: 'text-base', wrapper: variant === 'chip' ? 'px-3 py-1.5 gap-1.5' : 'px-2 py-1.5 gap-1.5' },
		md: { icon: 'w-6 h-6', text: 'text-lg', wrapper: variant === 'chip' ? 'px-4 py-2.5 gap-2' : 'px-3 py-2 gap-2' },
		lg: { icon: 'w-8 h-8', text: 'text-xl', wrapper: variant === 'chip' ? 'px-5 py-3 gap-2.5' : 'px-3 py-2 gap-2.5' },
	};

	const styles = sizes[size];

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-skill-item',
					'flex items-center bg-secondary-950 border-2 border-secondary-700 hover:bg-secondary-800 active:bg-secondary-900 transition-colors select-none',
					className,
					styles.wrapper,
					variants[variant]
				)
			)}
			{...props}
		>
			<Icon
				id={icon}
				className={clsx(
					'brk-skill-item__icon',
					styles.icon
				)}
			/>
			<span
				className={clsx(
					'brk-skill-item__text',
					styles.text
				)}
			>
				{name}
			</span>
		</Tag>
	)
}
export const MotionSkillItem = motion.create(SkillItem)

export default SkillItem;