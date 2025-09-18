// --------------------------------------------------------------------- 
// Components > Project item
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Project } from '@/app/types';
import Link from '@/components/Link';
import Text from '@/components/Text';
import moment from 'moment';
import { getStaticAssetURL } from '@/app/functions';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import SkillsList from '@/components/SkillsList';
import Motion from '@/modules/motion';
import Video from '@/components/Video';
// --------------------------------------------------------------------- 

export interface ProjectItemProps extends Omit<BaseComponentProps, 'children'>, Project {
	alignment?: 'left' | 'right';
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	className,
	as: Tag = 'article',
	name,
	finishDate,
	description,
	technologies,
	media,
	links,
	alignment = 'left'
}) => {
	const [isMobile] = useMediaQuery('(max-width: 32rem)');

	const styles = {
		wrapper: alignment === 'left' ? '@4xl:pl-0' : '@4xl:pr-0',
		frame: alignment === 'left' ? '@4xl:left-[unset] @4xl:right-0' : '@4xl:right-[unset] @4xl:left-0',
		left: alignment === 'left' ? '@4xl:order-0' : '@4xl:order-1',
		right: alignment === 'left' ? '@4xl:order-1' : '@4xl:order-0'
	}

	return (
		<Tag className={twMerge(
			clsx(
				'brk-project-item',
				'@container/project-item w-full pt-4',
				className
			))}>

			{/* <ProjectItemWrapper> */}
			<Motion.ScrollReveal
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.6
				}}
				className={twMerge(
					clsx(
						'brk-project-item-wrapper',
						'relative w-full flex flex-col @4xl:flex-row @4xl:items-center gap-6 @xl:gap-8',
						'px-6 @xl:px-8 @2xl:px-10 pt-10 @xl:pt-12 @2xl:pt-14 @3xl:pt-16 @5xl:pt-28 pb-6 @xl:pb-8 @2xl:pb-10 @3xl:pb-12 @5xl:pb-24',
						styles.wrapper
					))}
			>

				{/* <ProjectItemLeft> */}
				<div className={twMerge(clsx(
					'brk-project-item-left',
					'@container/project-item-left z-10 w-auto flex-auto',
					styles.left
				))}>

					{/* <ProjectItemVideo> */}
					{(media?.thumbnail?.url || media?.video.url) && (
						<div className={clsx(
							'brk-project-item-video',
							'border-3 border-secondary-700 rounded-lg overflow-hidden',
							'w-full @4xl:w-[50vw] @4xl:max-w-[48rem]'
						)}>
							<Video
								autoPlay
								loop
								muted
								playsInline
								poster={getStaticAssetURL(media?.thumbnail?.url)}
								sources={media?.video?.url
									? [{ src: getStaticAssetURL(media?.video.url), type: 'video/mp4' }]
									: []
								}
							/>
						</div>
					)}
					{/* </ProjectItemVideo> */}

				</div>
				{/* </ProjectItemLeft> */}

				{/* <ProjectItemRight> */}
				<div className={twMerge(clsx(
					'brk-project-item-right',
					'@container/project-item-right flex-auto flex flex-col gap-4 @3xl:gap-6',
					styles.right
				))}>

					{/* <ProjectItemContent> */}
					<div className={clsx(
						'brk-project-item-content',
						'flex flex-col gap-4 @lg:gap-6'
					)}>

						{/* <ProjectItemHeading> */}
						<div className={clsx(
							'brk-project-item-heading',
							'flex flex-col gap-3 @lg:gap-4'
						)}>
							{/* <ProjectItemSubtitle> */}
							<Motion.ScrollReveal
								initial={{ opacity: 0, y: '25%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6
								}}
								className={clsx(
									'brk-project-item-subtitle',
									'w-fit px-2.5 md:px-3 py-1.5 md:py-2 text-base md:text-lg lg:text-xl leading-[1] font-normal text-secondary-100 bg-secondary-900 rounded-full'
								)}
							>
								{moment(finishDate).year()}
							</Motion.ScrollReveal>

							{/* <ProjectItemTitle> */}
							<h3
								className={clsx(
									'brk-project-item-title',
									'font-bold text-2xl md:text-4xl xl:text-5xl leading-[1.25]'
								)}
							>
								<Motion.ScrollReveal
									initial={{ opacity: 0, y: '25%' }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6
									}}
								>
									{name}
								</Motion.ScrollReveal>
							</h3>
						</div>
						{/* </ProjectItemHeading> */}

						{/* <ProjectItemDescription> */}
							<Motion.ScrollReveal
								initial={{ opacity: 0, y: '25%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6
								}}
							>
								<Text
									withMarkdown
									as="div"
									className={clsx(
										'brk-project-item-description',
										'text-base md:text-lg lg:text-xl leading-[1.75]'
									)}
								>
									{description}
								</Text>
							</Motion.ScrollReveal>
						{/* </ProjectItemDescription> */}

						{/* <ProjectItemLinks> */}
						<Motion.ScrollReveal
							className={clsx(
								'brk-project-item-links',
								'flex flex-wrap gap-3'
							)}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							{links.map((link) => (
								<Link
									key={link.text}
									target="_blank"
									className={clsx(
										'brk-project-item-link'
									)}
									variant="animated"
									size={isMobile ? 'xs' : 'sm'}
									{...link}
								/>
							))}
						</Motion.ScrollReveal>
						{/* </ProjectItemLinks> */}
					</div>
					{/* </ProjectItemContent> */}
				</div>
				{/* </ProjectItemRight> */}

				{/* <ProjectItemFrame> */}
				<div className={twMerge(clsx(
					'brk-project-item-frame',
					'absolute z-0 top-0 left-0 pointer-events-none border-3 border-secondary-700 rounded-lg',
					'w-full h-full @4xl:w-[calc(100%-var(--spacing)*24)]',
					styles.frame
				))}>
					<div className={twMerge(
						clsx(
							'brk-project-item-technologies',
							'w-full absolute overflow-hidden',
							'-top-5',
							'w-[calc(100%-(var(--spacing)*6)))] @xl:w-[calc(100%-(var(--spacing)*8)))] @2xl:w-[calc(100%-(var(--spacing)*10)))]',
						))}>
						<div className={clsx(
							'brk-project-item-technologies-wrapper',
							'ml-6 @xl:ml-8 @2xl:ml-10',
						)}>
							<div className={clsx(
								'absolute top-0 w-12 h-full z-10',
								'left-6 @xl:left-8 @2xl:left-10',
								'bg-gradient-to-r from-secondary-950 to-transparent',
							)}
							/>
							<SkillsList
								className={clsx(
									'brk-project-item-technologies-list',
								)}
								size="sm"
								variant="chip"
								slideshow
								skills={technologies}
							/>
							<div className={clsx(
								'absolute top-0 w-12 h-full z-10',
								'right-0',
								'bg-gradient-to-l from-secondary-950 to-transparent',
							)}
							/>
						</div>
					</div>

				</div>
				{/* </ProjectItemFrame> */}
			</Motion.ScrollReveal>
			{/* </ProjectItemWrapper> */}
		</Tag>
	)
}

export default ProjectItem;