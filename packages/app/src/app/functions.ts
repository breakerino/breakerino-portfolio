// --------------------------------------------------------------------- 
// App > Functions
// --------------------------------------------------------------------- 
export const getStaticAssetURL = (path: string) => `${process.env.NEXT_PUBLIC_STATIC_BASE_URL}${path}`;

export const isElementVisible = (element: Element, threshold: number = 0.25): boolean => {
	const rect = element.getBoundingClientRect();
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	const windowWidth = window.innerWidth || document.documentElement.clientWidth;

	const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
	const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);

	if (visibleHeight <= 0 || visibleWidth <= 0) {
		return false;
	}

	const elementArea = rect.width * rect.height;
	const visibleArea = visibleHeight * visibleWidth;

	// If element is taller than viewport, compare against viewport height
	if (rect.height > windowHeight) {
		const ratio = visibleHeight / windowHeight;
		return ratio >= threshold;
	}

	// Otherwise, compare against element area
	return visibleArea / elementArea >= threshold;
};