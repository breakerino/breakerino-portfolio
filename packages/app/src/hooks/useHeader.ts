// --------------------------------------------------------------------- 
// Hooks > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { debounce } from 'lodash';
import React from 'react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { TRANSITION_DURATION } from '@/app/constants';
import { useAppContext } from '@/contexts/App';
// --------------------------------------------------------------------- 

export interface UseHeaderProps {
	stickyThreshold: number;
	showOffset: number;
	hideOffset: number;
	delay?: number;
}

const useHeader = ({stickyThreshold, showOffset, hideOffset, delay = 50}: UseHeaderProps) => {
	const { store: {isNavigating} } = useAppContext();
	
	const [isVisible, setIsVisible] = React.useState<boolean>(false);
	const [isSticky, setIsSticky] = React.useState<boolean>(false);
	const [isAnimated, setIsAnimated] = React.useState<boolean>(false);
	
	const lastScrollY = React.useRef(0);
	
	const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;

		// Sticky
		setIsSticky(currentScrollY > stickyThreshold);
		
		// Animated
		setTimeout(() => {
			setIsAnimated(currentScrollY > stickyThreshold)
		}, TRANSITION_DURATION);

		// Visibility
    if (!isNavigating && currentScrollY < (lastScrollY.current - showOffset)) {
      setIsVisible(true);
    } else if (currentScrollY > (lastScrollY.current + hideOffset)) {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  }, delay);
	
	React.useEffect(() => {
		if ( isNavigating ) {
			setIsVisible(false);
		}
	}, [isNavigating, isVisible]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
	
	return { isSticky, isVisible, isAnimated }
}

export default useHeader;