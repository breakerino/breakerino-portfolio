// --------------------------------------------------------------------- 
// Settings > Controller
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DefaultContext } from 'koa';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Response from '../../../utils/response';
// --------------------------------------------------------------------- 

export default {
	getSiteSettings: async (ctx: DefaultContext) => {
		const response = new Response(ctx);

		try {
			const settings = await strapi.service('api::settings.site').getSettings();
			response.setData(settings);
		} catch (error) {
			response.setError(error);
			response.setStatus(error?.status ?? 400);
		}

		return response.send();
	},

	getPersonalSettings: async (ctx: DefaultContext) => {
		const response = new Response(ctx);

		try {
			const settings = await strapi.service('api::settings.personal').getSettings();
			response.setData(settings);
		} catch (error) {
			response.setError(error);
			response.setStatus(error?.status ?? 400);
		}

		return response.send();
	}
};