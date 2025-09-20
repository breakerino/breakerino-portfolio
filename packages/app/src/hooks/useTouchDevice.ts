// --------------------------------------------------------------------- 
// Hooks > Touch device
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import React from 'react';
// --------------------------------------------------------------------- 

const useTouchDevice = () => {
  const [isTouch, setIsTouch] = React.useState(typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0));

  React.useEffect(() => {
		const mediaQuery = window.matchMedia('(pointer: coarse)');
		
    const checkTouch = () => {
      const touch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
      setIsTouch(touch);
    };

    window.addEventListener('resize', checkTouch);
		mediaQuery.addEventListener('change', checkTouch);
		
    return () => {
			window.removeEventListener('resize', checkTouch);
			mediaQuery.removeEventListener('change', checkTouch);
    };
  }, []);

  return [isTouch];
}

export default useTouchDevice;