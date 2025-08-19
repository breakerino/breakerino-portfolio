// --------------------------------------------------------------------- 
import React, { useRef } from 'react';
import { isArray } from 'lodash';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import useLogger from '@/hooks/useLogger';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_EVENT_BUS_NAMESPACE } from '@/app/constants';
// --------------------------------------------------------------------- 

export const useEventBus = ({ namespace }: { namespace?: string } = { namespace: DEFAULT_EVENT_BUS_NAMESPACE }) => {
	const logger = useLogger('Event Bus');
	const channel = React.useMemo(() => {
		if (!('BroadcastChannel' in window)) {
			logger.warn('Required browser API "BroadcastChannel" is not supported in this browser, cross-window events dispatching will not work.')
			return null;
		}

		// @ts-expect-error - TS may not have BroadcastChannel on window in non-DOM/SSR typings
		return new window.BroadcastChannel(namespace);
	}, [namespace, logger]);

	const registeredEvents = useRef<Record<string, EventListener[]>>({});

	React.useEffect(() => {
		return () => {
			if (channel) {
				channel.close();
			}
		}
	}, [channel]);

	return {
		on<T = Record<string, unknown>>(event: string | string[], callback: (data: T, eventName: string) => void) {
			const events = isArray(event) ? event : [event];

			events.forEach((eventName) => {
				logger.debug(`Subscribing to event ${namespace}:${eventName}`);

				const callbackFn = (e: Partial<CustomEvent>) => {
					logger.debug(`Triggered event ${namespace}:${eventName}`, e.detail);
					callback(e?.detail, eventName);
				};

				document.addEventListener(`${namespace}:${eventName}`, callbackFn, true);

				registeredEvents.current[eventName] = registeredEvents.current[eventName] || [];
				registeredEvents.current[eventName].push(callbackFn);
			});
		},
		dispatch<T = Record<string, string>>(event: string | string[], data?: T, global: boolean = false) {
			const events = isArray(event) ? event : [event];

			events.forEach((eventName) => {
				logger.debug(`Dispatching event ${namespace}:${eventName}`, data);
				document.dispatchEvent(new CustomEvent(`${namespace}:${eventName}`, data ? { detail: { ...data } } : {}));

				if (global && channel) {
					channel.postMessage({
						event: `${namespace}:${eventName}`,
						data: data ? { detail: { ...data } } : {}
					})
				}
			});
		},
		remove(event: string | string[], callback: EventListener) {
			const events = isArray(event) ? event : [event];

			events.forEach((eventName) => {
				logger.debug(`Removing event ${namespace}:${eventName}`);

				document.removeEventListener(`${namespace}:${eventName}`, callback, true);

				registeredEvents.current[eventName] = registeredEvents.current[eventName] || [];
				registeredEvents.current[eventName] = registeredEvents.current[eventName].filter((cb) => cb !== callback);
			});
		},
		removeAll(event: string | string[]) {
			const events = isArray(event) ? event : [event];

			events.forEach((eventName) => {
				registeredEvents.current[eventName] = registeredEvents.current[eventName] || [];
				registeredEvents.current[eventName].forEach((callback: EventListener) => this.remove(eventName, callback));
			});
		},
		clearAll() {
			Object.keys(registeredEvents.current).forEach((event) => this.removeAll(event));
		},
	};
};

export default useEventBus;
