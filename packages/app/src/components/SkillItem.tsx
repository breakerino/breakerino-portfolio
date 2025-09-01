// --------------------------------------------------------------------- 
// Components > Skill item
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Skill } from '@/app/types';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
// --------------------------------------------------------------------- 

export type SkillItemSize = 'small' | 'medium' | 'large';;
export type SkillItemVariant = 'rounded' | 'chip';

export interface SkillItemProps extends Omit<BaseComponentProps, 'children'>, Omit<Skill, 'order'> {
	variant?: SkillItemVariant;
	size?: SkillItemSize;
}

const SkillItem: React.FC<SkillItemProps> = ({ className, name, icon, size = 'medium', variant = 'rounded', as: Tag = 'div' }) => {
	const variants: Record<SkillItemVariant, string> = {
		rounded: 'rounded-lg',
		chip: 'rounded-full'
	}
	
	const sizes: Record<SkillItemSize, string> = {
		small: variant === 'chip' ? 'px-3 py-2 gap-1.5' : 'px-2 py-1.5 gap-1.5',
		medium: variant === 'chip' ? 'px-4 py-2.5 gap-2' : 'px-2.5 py-2 gap-2',
		large: variant === 'chip' ? 'px-5 py-3 gap-2.5' : 'px-3 py-2.5 gap-2.5 ',
	}
	
	const iconSizes: Record<SkillItemSize, string> = {
		small: 'h-5',
		medium: 'h-6',
		large: 'h-8'
	}
	
	const textSizes: Record<SkillItemSize, string> = {
		small: 'text-md lg:text-md',
		medium: 'text-lg lg:text-lg',
		large: 'text-xl lg:text-xl'
	}

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-skill-item',
					'flex items-center border-2 border-secondary-700 hover:bg-secondary-800 active:bg-secondary-900 cursor-pointer transition-colors',
					className,
					sizes[size],
					variants[variant]
				)
			)}
		>
			<Icon
				id={icon}
				className={clsx(
					'brk-skill-item__icon',
					iconSizes[size]
				)}
			/>
			<Text
				className={clsx(
					'brk-skill-item__text',
					textSizes[size]
				)}
			>
				{name}
			</Text>
		</Tag>
	)
}

export default SkillItem;