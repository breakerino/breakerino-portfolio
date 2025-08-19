// --------------------------------------------------------------------- 
// Controllers > Breakerino
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DefaultContext } from 'koa';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Response from '../../../utils/response';
// --------------------------------------------------------------------- 

export default {
  getData: async (ctx: DefaultContext) => {
		const response = new Response(ctx);
		
		try {
			response.setData({
				text: 'Strapi + TypeScript + Docker'
			});
		} catch (error) {
			response.setError(error);
			response.setStatus(error?.status ?? 400);
		}
		
		return response.send();
  }
};