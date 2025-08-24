// --------------------------------------------------------------------- 
// Utils > Functions
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import _ from 'lodash';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { GenericException, ResponseError } from './errors';
// --------------------------------------------------------------------- 

export const handleResponseError = (error: any | null = null) => {
	if (!(error instanceof GenericException)) {
		return {
			status: 500,
			error: {
				name: 'UnknownError',
				//message: String(error),
				message: error?.message ?? 'An unknown error has occured',
				details: {
					...error?.details,
					code: error?.code,
					status: error.response?.status,
					data: error.response?.data,
				},
			},
		};
	}

	const { id, status, name, message, details } =
		error instanceof GenericException && !(error instanceof ResponseError)
			? new ResponseError(error.message, 400, error.details)
			: error;

	return {
		status: status ?? 400,
		error: { id, name, message, status, details: _.omit(details, ['id']) },
	};
};

export const sanitizeDocument = (document: Record<string, any>) => _.omit(
	document, 
	['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt', 'locale']
);

export const sanitizeImage = (image: Record<string, any>) => _.omit(
	sanitizeDocument(image), 
	['alternativeText', 'caption', 'formats', 'hash', 'ext', 'mime', 'size', 'previewUrl', 'provider', 'provider_metadata', 'folderPath', 'locale']
);