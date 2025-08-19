// --------------------------------------------------------------------- 
// Api > Server
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Axios, { AxiosRequestConfig, AxiosRequestTransformer, AxiosResponse, AxiosResponseTransformer } from 'axios';
import { isArray, isObject, isUndefined, keys, merge } from 'lodash';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import useLogger from '@/hooks/useLogger';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import config from '../config';
import endpoints from '../endpoints';
import { EndpointsArgs, RequestArgs } from '../types';
// --------------------------------------------------------------------- 

declare global {
	interface ObjectConstructor {
		entries<T extends Record<PropertyKey, unknown>>(o: T): [keyof T, T[keyof T]][]
	}
}

const axios = Axios.create({ ...config });

export const useApi = () => {
	const logger = useLogger('Api');

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleRequest = (id: (keyof typeof endpoints), _defaultArgs: EndpointsArgs) => {
		return (
			async (_passedArgs: RequestArgs): Promise<AxiosResponse> => { // TODO
				//
				// Prepare endpoint args
				//
				const { transform: defaultTransform, url, method, urlParams: defaultUrlParams, ...defaultArgs } = merge({}, _defaultArgs);
				const { transform: passedTransform, urlParams: passedUrlParams, ...passedArgs } = merge({}, _passedArgs);

				const requestArgs: AxiosRequestConfig & {
					transformRequest: AxiosRequestTransformer[]
					transformResponse: AxiosResponseTransformer[]
				} = {
					...defaultArgs, ...passedArgs,
					url, method,
					headers: { ...defaultArgs?.headers, ...passedArgs?.headers },
					transformRequest: [],
					transformResponse: []
				};

				const urlParams = { ...defaultUrlParams, ...passedUrlParams };

				// Replace URL params placeholders (:param)
				for (const [key, value] of Object.entries<string | number>(urlParams)) {
					requestArgs.url = requestArgs.url?.replaceAll(`:${key}`, String(value));
				}

				//
				// Request transform
				//
				requestArgs.transformRequest = [
					...(defaultTransform?.request ? [defaultTransform?.request] : []),
					...(passedTransform?.request ? [passedTransform?.request] : []),
					...(!isUndefined(axios?.defaults?.transformRequest) ? (isArray(axios.defaults.transformRequest) ? [...axios.defaults.transformRequest] : [axios.defaults.transformRequest]) : []),
				]

				//
				// Response transform
				//
				requestArgs.transformResponse = [
					...(!isUndefined(axios?.defaults?.transformResponse) ? (isArray(axios.defaults.transformResponse) ? [...axios.defaults.transformResponse] : [axios.defaults.transformResponse]) : []),
					...(defaultTransform?.response ? [defaultTransform?.response] : []),
					...(passedTransform?.response ? [passedTransform?.response] : []),
				]

				//
				// Response
				//
				let response = null
				
				try {
					logger.debug(`REQUEST: ${method} ${url} (${id})`, { request: requestArgs });
					response = await axios({ ...requestArgs });
					logger.debug(`RESPONSE: ${method} ${url} (${id})`, response);

					logger.table(response.data, isArray(response.data) && isObject(response.data[0]) ? keys(response.data[0]) : (isObject(response.data) ? keys(response.data) : undefined));
				} catch (error) {
					logger.debug(`ERROR: ${method} ${url} (${id})`, error);
					throw error;
				}

				return response;
			}
		)
	}

	const handlers = Object.fromEntries(
		Object.entries(endpoints).map(([id, args]) => [id, handleRequest(id as keyof typeof endpoints, args)])
	) as Record<keyof typeof endpoints, (requestArgs?: RequestArgs) => Promise<AxiosResponse>>


	return handlers;
}