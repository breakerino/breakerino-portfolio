// --------------------------------------------------------------------- 
// Components > Work experience item
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import moment from 'moment';
import Link from 'next/link';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, WorkExperience as WorkExperienceItemType } from '@/app/types';
import Logo from '@/components/Logo';
import { getStaticAssetURL } from '@/app/functions';
import Text from '@/components/Text';
import SkillsList from '@/components/SkillsList';
import Motion from '@/modules/motion';
import { DOMMotionComponents } from 'motion/react';
// --------------------------------------------------------------------- 

export interface WorkExperienceItemProps extends Omit<BaseComponentProps, 'children'>, WorkExperienceItemType { }

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
	className,
	as = 'div',
	companyName,
	companySiteURL,
	companyLogo,
	location,
	startDate,
	endDate,
	employmentType,
	position,
	description,
	skills
}) => {
	return (
		<Motion.ScrollReveal
			as={as as keyof DOMMotionComponents}
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.6
			}}
			className={twMerge(
				clsx(
					'brk-work-experience-item',
					'@container/work-experience-item w-full border-3 border-secondary-700 rounded-lg',
					className
				)
			)}
		>
			<div
				className={clsx(
					'brk-work-experience-item-wrapper',
					'flex flex-col gap-4 @3xl:gap-6 p-6 @3xl:p-9 @6xl:p-12'
				)}>
				<div className={clsx(
					'brk-work-experience-item-header',
					'flex flex-col gap-4 @3xl:flex-row @3xl:items-center @3xl:justify-between'
				)}>
					<div className="flex flex-col gap-3 @3xl:gap-4">
						<Motion.ScrollReveal
							initial={{ opacity: 0, y: '15%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6
							}}
						>
							<Logo
								className="w-fit h-12 @3xl:h-16 @6xl:h-23 hover:-translate-y-1.5 transition-transform duration-500"
								src={getStaticAssetURL(companyLogo.url)}
								href={companySiteURL}
								width={companyLogo.width ?? undefined}
								height={companyLogo.height ?? undefined}
								alt={companyLogo.alternativeText ?? `${companyName} logo`}
							/>
						</Motion.ScrollReveal>
						<div className="flex flex-col gap-1.5 @3xl:gap-2">
							<div className="overflow-hidden">
								<Motion.ScrollReveal
									initial={{ opacity: 0, y: '15%' }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6
									}}
								>
									<Link
										href={companySiteURL}
										target="_blank"
										className="text-primary-50 hover:text-primary-400 text-xl @3xl:text-2xl @6xl:text-3xl leading-[1.15] font-normal cursor-none"
									>
										{companyName}
									</Link>
								</Motion.ScrollReveal>
							</div>
							<div className="text-primary-50 text-2xl @3xl:text-3xl @6xl:text-4xl leading-[1.15] overflow-hidden">
								<Motion.ScrollReveal
									as="strong"
									className="font-semibold"
									initial={{ opacity: 0, y: '15%' }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6
									}}
								>
									{position}
								</Motion.ScrollReveal>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2 @3xl:text-right">
						<div className="text-primary-100 text-lg @3xl:text-xl @6xl:text-2xl] leading-[1.15] overflow-hidden">
							<Motion.ScrollReveal
								as="span"
								initial={{ opacity: 0, y: '15%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6
								}}
							>
								{moment(startDate).format('MMM YYYY')} - {endDate ? moment(endDate).format('MMM YYYY') : 'Present'}
								&nbsp;·&nbsp;
								{moment(endDate).diff(moment(startDate), 'years')} yrs {moment(endDate).diff(moment(startDate), 'months') % 12} mos
							</Motion.ScrollReveal>
						</div>
						<div className="text-primary-200 text-base @3xl:text-lg @6xl:text-xl leading-[1.15] overflow-hidden">
							<Motion.ScrollReveal
								as="span"
								initial={{ opacity: 0, y: '15%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6
								}}
							>
								{location}
							</Motion.ScrollReveal>
						</div>
						<div className="text-primary-100 text-sm @3xl:text-base @6xl:text-lg leading-[1.15] overflow-hidden">
							<Motion.ScrollReveal
								as="span"
								initial={{ opacity: 0, y: '15%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6
								}}
							>
								{employmentType}
							</Motion.ScrollReveal>
						</div>
					</div>
				</div>

				<div className={clsx(
					'brk-work-experience-item-divider',
					'w-full h-px bg-secondary-700'
				)} />

				<div className={clsx(
					'brk-work-experience-item-content',
					'flex flex-col @3xl:flex-row gap-8'
				)}>
					<div className="overflow-hidden">
						<Motion.ScrollReveal
							initial={{ opacity: 0, y: 32 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6
							}}
						>
							<Text
								withMarkdown
								className="text-base @3xl:text-md @6xl:text-xl leading-[1.75]"
							>
								{description}
							</Text>
						</Motion.ScrollReveal>
					</div>
					<div className="flex flex-col gap-4">
						<Motion.ScrollReveal
							initial={{ opacity: 0, y: '15%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6
							}}
						>
							<strong className="text-primary-100 text-2xl">Skills used</strong>
						</Motion.ScrollReveal>
						<SkillsList animated skills={skills} variant="chip" size="sm" />
					</div>
				</div>
			</div>
		</Motion.ScrollReveal>
	)
}

export default WorkExperienceItem;