// --------------------------------------------------------------------- 
import _ from 'lodash';
import { DefaultContext } from 'koa';
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

export const sendResponse = (
	{ data = {}, error = {}, status = 200 },
	ctx: DefaultContext
) => {
	return ctx.send({ data, error }, status);
};