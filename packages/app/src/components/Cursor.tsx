// ---------------------------------------------------------------------
// Components > Cursor
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types';
import useTouchDevice from '@/hooks/useTouchDevice';
// --------------------------------------------------------------------- 

export interface CursorProps extends Omit<BaseComponentProps, 'as' | 'children'> {
	color?: string;
	size?: number;
	trailLength?: number;
	trailScale?: number;
}

const Cursor: React.FC<CursorProps> = ({
	className,
	size = 24,
	trailLength = 8,
	trailScale = 0.5,
}) => {
	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const trailRefs = React.useRef<HTMLDivElement[]>([]);
	const rafRef = React.useRef<number | null>(null);
	const positionsRef = React.useRef<{ x: number; y: number }[]>([]);
	const lastMouseRef = React.useRef({ x: -9999, y: -9999 });

	const [isTouchDevice] = useTouchDevice();

	function onMouseMove(e: MouseEvent) {
		lastMouseRef.current = { x: e.clientX, y: e.clientY };
	}

	function loop() {
		const { x, y } = lastMouseRef.current;

		if (x === -9999 && y === -9999) {
			rafRef.current = requestAnimationFrame(loop);
			return;
		}

		positionsRef.current.pop();
		positionsRef.current.unshift({ x, y });

		trailRefs.current.forEach((node, i) => {
			if (!node) {
				return;
			}

			const positionIndex = Math.floor((i / trailRefs.current.length) * positionsRef.current.length);
			const position = positionsRef.current[positionIndex];
			const trailSize = size * Math.pow(trailScale, i + 1);

			node.style.width = `${trailSize}px`;
			node.style.height = `${trailSize}px`;
			node.style.opacity = `${1 - (i + 1) / (trailRefs.current.length + 1)}`;
			node.style.transform = `translate3d(${position.x - trailSize / 2}px, ${position.y - trailSize / 2}px, 0)`;
		});

		rafRef.current = requestAnimationFrame(loop);
	}
	
	React.useEffect(() => {
		if (isTouchDevice) {
			return;
		}

		positionsRef.current = Array.from({ length: trailLength }).map(() => ({ x: -9999, y: -9999, }));

		rafRef.current = requestAnimationFrame(loop);
		window.addEventListener('mousemove', onMouseMove, { passive: true });

		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}

			window.removeEventListener('mousemove', onMouseMove);
		};
	}, [size, trailLength, trailScale, isTouchDevice]);

	const setTrailRef = (element: HTMLDivElement | null, i: number) => {
		if (element) {
			trailRefs.current[i] = element;
		}
	};

	if (isTouchDevice) {
		return <></>;
	}

	return (
		<div
			ref={containerRef}
			className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-[10000]"
			aria-hidden="true"
		>
			{Array.from({ length: trailLength }).map((_, i) => (
				<div
					key={i}
					ref={(el) => setTrailRef(el, i)}
					className={className}
					style={{
						position: 'fixed',
						left: 0,
						top: 0,
						width: `${size}px`,
						height: `${size}px`,
						borderRadius: '50%',
						boxShadow: '0 0 5rem var(--tw-shadow-color)',
						transform: 'translate3d(-9999px, -9999px, 0)',
						transition: 'width 120ms linear, height 120ms linear',
						willChange: 'transform, opacity, width, height',
						mixBlendMode: 'normal',
					}}
				/>
			))}
		</div>
	);
};

export default Cursor;
