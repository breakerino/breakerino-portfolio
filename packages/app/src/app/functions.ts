// --------------------------------------------------------------------- 
// App > Functions
// --------------------------------------------------------------------- 
export const getStaticAssetURL = (path: string) => `${process.env.NEXT_PUBLIC_STATIC_BASE_URL}${path}`;