// --------------------------------------------------------------------- 
// Utils > Errors
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import _ from 'lodash';
import logger from './logger';
// --------------------------------------------------------------------- 

export class GenericException extends Error {
  public id: string | null = null;
  public error: any;
  public details: Record<string, any> = {};
  public message: string = '';

  constructor(message: string, details = {}) {
    super(message);
    this.name = 'GenericException';
    this.setProps({ error: message, details });
  }

  setProps({ error, details }) {
    this.id = details.id ?? null;
    this.message = error;
    this.details = details ?? {};
  }
}

export class ResponseError extends GenericException {
	public status: number;

	constructor(message: string, status: number, details = {}) {
		super(message, details);

		this.name = 'ResponseError';
		this.status = status ?? 500;
	}
}

export const handleResponseError = (error: any | null = null) => {
	// Log error
	logger.error(error);
	
	// Default error
	if (!(error instanceof GenericException)) {
		return {
			status: 500,
			error: {
				name: 'UnknownError',
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

	// Response error
	const { id, status, name, message, details } =
		error instanceof GenericException && !(error instanceof ResponseError)
			? new ResponseError(error.message, 400, error.details)
			: error;

	return {
		status: status ?? 400,
		error: { id, name, message, status, details: _.omit(details, ['id']) },
	};
};