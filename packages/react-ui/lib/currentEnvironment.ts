const { BROWSER_ENV, NODE_ENV, enableReactTesting } = process.env;
export const isTestEnv: boolean = BROWSER_ENV === 'test' || NODE_ENV === 'test' || Boolean(enableReactTesting);
export const isProductionEnv: boolean = BROWSER_ENV === 'production' || NODE_ENV === 'production';
export const isDevelopmentEnv: boolean = BROWSER_ENV === 'development' || NODE_ENV === 'development';
