// --------------------------------------------------------------------- 
// Modules > Motion > Components > Letters pull up
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import type { UseInViewOptions, Variants } from 'framer-motion'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { BaseComponentProps } from '@/app/types'
// --------------------------------------------------------------------- 

export interface LettersPullUpProps extends BaseComponentProps {
  inViewOptions?: UseInViewOptions;
	ariaLabel?: string
  ariaHidden?: boolean
  initialDelay?: number
  delayBetweenLetters?: number
	animationDuration?: number;
}

const LettersPullUp: React.FC<LettersPullUpProps> = ({
  children,
  className,
  as: Tag = 'span',
  ariaLabel,
  ariaHidden,
	inViewOptions = { once: true, margin: '-10% 0px' },
  initialDelay = 0,
  delayBetweenLetters = 0.05,
	animationDuration = 0.5,
}) => {
  const containerRef = React.useRef(null)
  const isInView = useInView(containerRef, inViewOptions)

  const letters = children?.toString().split('')
	
  if (!letters) {
		return null;
	}

  const motionVariants: Variants = {
    initial: { y: '100%', opacity: 0 },
    animate: (i: number) => ({
      y: ['100%', '-10%', '0%'],
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: 'easeOut',
        delay: initialDelay + i * delayBetweenLetters
      }
    })
  }

  return (
    <div className="inline-block overflow-hidden w-max" ref={containerRef}>
      <Tag
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={motionVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            custom={index}
            className="inline-block"
            aria-hidden="true"
          >
            {letter === ' ' ? <span>&nbsp;</span> : letter}
          </motion.span>
        ))}
      </Tag>
    </div>
  )
}

export default LettersPullUp;