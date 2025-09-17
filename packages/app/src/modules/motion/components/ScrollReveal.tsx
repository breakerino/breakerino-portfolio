// --------------------------------------------------------------------- 
// Modules > Motion > Components > Scroll reveal
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
import { motion, MotionNodeAnimationOptions, useInView, UseInViewOptions, type DOMMotionComponents } from 'framer-motion';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
// --------------------------------------------------------------------- 

export interface ScrollRevealProps extends Omit<BaseComponentProps, 'as'> {
	as?: keyof DOMMotionComponents;
	inViewOptions?: UseInViewOptions;
	initial?: MotionNodeAnimationOptions['initial'];
	animate?: MotionNodeAnimationOptions['animate'];
	transition?: MotionNodeAnimationOptions['transition'];
	style?: React.HTMLAttributes<HTMLElement>['style'];
}

const ScrollReveal = React.forwardRef<Element, ScrollRevealProps>(({ 
	as = 'div' as keyof DOMMotionComponents,
	children,
	className,
	inViewOptions = { once: true, margin: '-10% 0px' },
	initial = { opacity: 0 },
	animate = { opacity: 1 },
	transition = { duration: 0.6 },
	...props
}, forwardedRef) => {
	const localRef = React.useRef<Element>(null);
	const ref = (forwardedRef as React.RefObject<Element>) || localRef;
	const isInView = useInView(ref, inViewOptions);
	
	const domMotion = motion as unknown as Record<keyof DOMMotionComponents, unknown>;
	const Component = domMotion[as] as React.ComponentType<Record<string, unknown>>;

	return (
		<Component
			ref={ref}
			className={className}
			initial={initial}
			animate={isInView ? animate : undefined}
			transition={transition}
			{...props}
		>
			{children}
		</Component>
	)
});

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;