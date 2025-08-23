// --------------------------------------------------------------------- 
// Sections > Hero
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Section from '@/components/Section';
import Container from '@/components/Container';
import Text from '@/components/Text';
import Heading from '@/components/Heading';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export interface AboutMeSectionProps {
	className?: string;
}
// --------------------------------------------------------------------- 

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ className }) => {
	return (
		<Section
			className={twMerge(
				clsx(
					'brk-section--about-me',
					className
				)
			)}>
			<Container>
				<Heading subtitle="A little" title="About me" />
				<div className="flex flex-col lg:flex-row gap-8">
					<div className={clsx(
						'brk-section--about-me-left',
						'flex-2/5'
					)}>
						<Image
							className="sticky top-8"
							src="/assets/img/ig-reel-preview.png"
							width={535}
							height={891}
							alt="IG Reel preview"
							priority
						/>
					</div>
					<div className={clsx(
						'brk-section--hero-right',
						'flex flex-col gap-4 flex-3/5'
					)}>
						<Text className="text-justify">
							I’m Matúš Mendel — better known online as Breakerino — a 24-year-old full stack web developer with 6 years of professional experience. My interest in computers and technology began in childhood — I got my first PC for my 9th birthday, and was instantly hooked. At first, I just played games, but soon I started exploring other possibilities: video editing, graphic design, basic 3D animation and modeling, video editing, and even running my own YouTube channel. My first coding experience came through Minecraft’s ComputerCraft mod, where I built a full operating system in Lua — and that’s when I knew I wanted to create with code.
						</Text>
						<Text>
							I studied graphic design at SOŠ Handlová (2017–2021), but most of my coding skills are self-taught. My professional journey began in 2019 when I joined Ametica. I started with graphic design and some content management, then moved on to frontend development — mostly CSS styling of WordPress sites — before transitioning into backend work on e-commerce and presentation projects.
						</Text>
						<Text>
							Since then, I’ve built full-stack web applications, e-shops, and internal tools using PHP, WordPress, TypeScript, React, Node.js, Strapi and Gitlab CI/CD. I focus on clean architecture, intuitive developer experience, and solid API design — all with a pixel-perfectionist approach to UI/UX and an equally meticulous attitude toward writing clean, maintainable, and standards-compliant code. Every layout must be organized, properly aligned, and visually flawless, and every line of code should follow best practices and established principles. Many of the systems I developed still run today, serving thousands of users and executing code every single second.
						</Text>
						<Text>
							When I’m working, music is my fuel — it brings me into a deep state of focus and flow. My playlists span J-Pop (Aimer, YOASOBI, Yorushika, ZUTOMAYO, Radwimps, Ado, LiSa, Creepy Nuts), Pop/Rock (Imagine Dragons, AJR, The Neighbourhood, Billie Eilish, Milky Chance, Adam Jensen, Paper Idol, The Score), and Indie/Alternative (David Kushner, Local Natives). Outside work, I enjoy anime like Your Name, Silent Voice, I Want to Eat Your Pancreas, Steins;Gate, Death Note, Bocchi the Rock, and Re:Zero; movies — with Interstellar as my favorite; K-dramas such as Sisyphus, My Name, and See You in My 19th Life; gaming (osu!, Beat Saber, LoL, CS2); playing piano; and hanging out with friends — often over a drink, darts, billiards, bowling, or table football.
						</Text>
						<Text>
							I’m not the most talkative person at first, but I value genuine connections and working with teams where ideas flow freely. Whether I’m developing a feature, refining an interface, or experimenting with a new technology, I aim to combine technical skill with creativity to deliver work that makes a difference.
						</Text>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default AboutMeSection;