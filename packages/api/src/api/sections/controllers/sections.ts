// --------------------------------------------------------------------- 
// Api > Sections > Controllers > Sections
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DefaultContext } from 'koa';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Response from '../../../utils/response';
// --------------------------------------------------------------------- 

export default {
	getSections: async (ctx: DefaultContext) => {
		const response = new Response(ctx);

		try {
			const sections = await strapi.service('api::sections.sections').getSections();
			response.setData(sections);
		} catch (error) {
			response.setError(error);
			response.setStatus(error?.status ?? 400);	
		}

		return response.send();
	}
};