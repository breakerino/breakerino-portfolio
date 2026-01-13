// --------------------------------------------------------------------- 
// Hooks > Touch device
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
'use client'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import * as React from 'react';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
const mediaQueries = {
  primaryInputIsTouch: '(pointer: coarse)',
  touchCannotHover: '(hover: none)',
} as const;
// --------------------------------------------------------------------- 

const useTouchDevice = (): boolean => {
  const getValue = React.useCallback(() => {
    if (typeof window === 'undefined') {
			return false;
		}

    return Object.values(mediaQueries).some(
      query => window.matchMedia(query).matches
    );
  }, []);

  const [isTouch, setIsTouch] = React.useState(getValue);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
			return;
		}

    const queries = Object.values(mediaQueries).map(query =>
      window.matchMedia(query)
    );

    const handleUpdate = () => setIsTouch(getValue());

    handleUpdate();

    queries.forEach(query =>
      query.addEventListener('change', handleUpdate)
    );

    return () => {
      queries.forEach(query =>
        query.removeEventListener('change', handleUpdate)
      );
    };
  }, [getValue]);

  return [isTouch];
}

export default useTouchDevice;