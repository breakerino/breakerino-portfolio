// --------------------------------------------------------------------- 
// Components > Project item
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Project as ProjectItemType } from '@/app/types';
import Link from '@/components/Link';
import Text from '@/components/Text';
import moment from 'moment';
import { getStaticAssetURL } from '@/app/functions';
import { useMediaQuery } from '@/hooks/useMediaQuery';
// --------------------------------------------------------------------- 

export interface ProjectItemProps extends Omit<BaseComponentProps, 'children'>, ProjectItemType {
	alignment?: 'left' | 'right';
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	className,
	as: Tag = 'article',
	name,
	finishDate,
	description,
	technologies,
	video,
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
				'@container/project-item w-full',
				className
			))}>

			{/* <ProjectItemWrapper> */}
			<div className={twMerge(
				clsx(
					'brk-project-item-wrapper',
					'relative w-full flex flex-col @4xl:flex-row @4xl:items-center gap-6 @xl:gap-8 p-6 @xl:p-8 @2xl:p-10 @3xl:py-12 @5xl:py-24',
					styles.wrapper
				))}>

				{/* <ProjectItemLeft> */}
				<div className={twMerge(clsx(
					'brk-project-item-left',
					'@container/project-item-left z-10 w-auto flex-auto',
					styles.left
				))}>

					{/* <ProjectItemVideo> */}
					<div className={clsx(
						'brk-project-item-video',
						'border-3 border-secondary-700 rounded-lg overflow-hidden',
						'w-full @4xl:w-[50vw] @4xl:max-w-[48rem]'
					)}>
						<Image
							className="w-full h-full object-contain object-center"
							src={getStaticAssetURL(video.thumbnail.url)}
							width={video.thumbnail.width}
							height={video.thumbnail.height}
							alt={video.thumbnail.alternativeText ?? 'Project video thumbnail'}
						/>
					</div>
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
							<span className={clsx(
								'brk-project-item-subtitle',
								'w-fit px-2.5 md:px-3 py-1.5 md:py-2 text-base md:text-lg lg:text-xl leading-[1] font-normal text-secondary-100 bg-secondary-900 rounded-full'
							)}>
								{moment(finishDate).year()}
							</span>

							{/* <ProjectItemTitle> */}
							<h3 className={clsx(
								'brk-project-item-title',
								'font-bold text-2xl md:text-4xl xl:text-5xl leading-[1.25]'
							)}>
								{name}
							</h3>
						</div>
						{/* </ProjectItemHeading> */}

						{/* <ProjectItemDescription> */}
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
						{/* </ProjectItemDescription> */}

						{/* <ProjectItemLinks> */}
						<div className={clsx(
							'brk-project-item-links',
							'flex flex-wrap gap-3'
						)}>
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
						</div>
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
				))} />
				{/* </ProjectItemFrame> */}
			</div>
			{/* </ProjectItemWrapper> */}
		</Tag>
	)
}

export default ProjectItem;