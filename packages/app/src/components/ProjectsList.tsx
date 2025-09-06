// --------------------------------------------------------------------- 
// Components > Projects List
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import moment from 'moment';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps, Project } from '@/app/types';
import ProjectItem from '@/components/ProjectItem';
// --------------------------------------------------------------------- 

export interface ProjectsListProps extends Omit<BaseComponentProps, 'children'> {
	projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ className, projects: passedProjects, as: Tag = 'ul' }) => {
	const projects = React.useMemo(() => {
		return passedProjects.sort((a, b) => {
			return moment(a.finishDate).unix() >= moment(b.finishDate).unix() ? -1 : 1;
		})
	}, [passedProjects]);

	return (
		<Tag
			className={twMerge(
				clsx(
					'brk-projects-list',
					'flex flex-col gap-8 md:gap-12 lg:gap-16',
					className
				)
			)}
		>
			{projects.map((project, index) => (
				<ProjectItem
					key={project.id}
					as="li"
					alignment={index % 2 === 0 ? 'right' : 'left'}
					{...project}
				/>
			))}
		</Tag>
	)
}

export default ProjectsList;