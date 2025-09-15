// --------------------------------------------------------------------- 
// Hooks > Header
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
// --------------------------------------------------------------------- 

export interface UseHeaderProps {
	stickyThreshold: number;
	showOffset: number;
	hideOffset: number;
}

const useHeader = ({stickyThreshold, showOffset, hideOffset}: UseHeaderProps) => {
	const [isVisible, setIsVisible] = React.useState<boolean>(false);
	const [isSticky, setIsSticky] = React.useState<boolean>(false);
	const [isAnimated, setIsAnimated] = React.useState<boolean>(false);
	
	const lastScrollY = React.useRef(0);
	
	const handleScroll = () => {
    const currentScrollY = window.scrollY;

		// Sticky
		setIsSticky(currentScrollY > stickyThreshold);
		
		setTimeout(() => {
			setIsAnimated(currentScrollY > stickyThreshold)
		}, 300);

		// Visibility
    if (currentScrollY < (lastScrollY.current - showOffset)) {
      setIsVisible(true);
    } else if (currentScrollY > (lastScrollY.current + hideOffset)) {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
	
	return {
		isSticky,
		isVisible,
		isAnimated
	}
}

export default useHeader;