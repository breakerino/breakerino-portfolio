// --------------------------------------------------------------------- 
import { DEFAULT_LOGGER_LABEL } from '@/app/constants';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
export type LogLevel = 'info' | 'debug' | 'warn' | 'error' | 'table';
export const LOG_LEVELS: LogLevel[] = ['info', 'debug', 'warn', 'error', 'table']
// --------------------------------------------------------------------- 

const useLogger = (label = '', prefix = DEFAULT_LOGGER_LABEL) => {
	const logMessage = (type: LogLevel, message: string | unknown, ...data: unknown[]) => {
		if (['debug'].includes(type) && process.env.NODE_ENV !== 'development') {
			return;
		}

		console[type](`[${prefix}${label ? ` - ${label}` : ''}] ${message}`, ...(data ?? undefined));
	}

	const logTable = (data: unknown, keys?: string[]) => {
		if (process.env.NODE_ENV !== 'development') {
			return;
		}
		console.table(data, keys);
	}

	return {
		...Object.fromEntries([
			...LOG_LEVELS.map(type => [type, (message: string | unknown, ...data: unknown[]) => logMessage(type, message, ...data)]),
			['table', logTable]
		]),
	}
}

export default useLogger;