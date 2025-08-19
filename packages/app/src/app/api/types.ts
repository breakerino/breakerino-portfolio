// --------------------------------------------------------------------- 
// Api > Types
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { AxiosRequestTransformer, AxiosResponseTransformer } from 'axios';
// --------------------------------------------------------------------- 

declare global {
	interface ObjectConstructor {
		entries<T extends Record<PropertyKey, unknown>>(o: T): [keyof T, T[keyof T]][]
	}
}


export interface EndpointsArgs extends RequestArgs {
	url: string;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE',
	transform?: {
		request?: AxiosRequestTransformer,
		response?: AxiosResponseTransformer,
	}
}

export interface RequestArgs {
	urlParams?: Record<string, string | number>,
	params?: Record<string, string | number>,
	data?: Record<string, unknown>,
	headers?: Record<string, string>,
	transform?: {
		request?: AxiosRequestTransformer,
		response?: AxiosResponseTransformer,
	}
}

export type UseApiProps = unknown