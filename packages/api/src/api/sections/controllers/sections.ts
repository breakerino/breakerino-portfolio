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
	getSection: async (ctx: DefaultContext) => {
		const { params }: { params: Record<string, string>} = ctx.request;
		
		const response = new Response(ctx);

		try {
			const section = await strapi.service('api::sections.sections').getSection(params.id);
			response.setData(section);
		} catch (error) {
			response.setError(error);
			response.setStatus(error?.status ?? 400);	
		}

		return response.send();
	},
	
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