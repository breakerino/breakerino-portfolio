// --------------------------------------------------------------------- 
// Api > Settings > Services > Site
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_SITE_LOCALE } from '../../../utils/constants';
import { sanitizeDocument, deepDocumentPopulate } from '../../../utils/functions';
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		
		const settings = await strapi.documents('api::settings.site').findFirst({
			populate: deepDocumentPopulate('api::settings.site'),
			locale: DEFAULT_SITE_LOCALE,
			status: 'published',
		});

		return this.sanitizeSettings(settings);
	},

	sanitizeSettings(document: Record<string, unknown>) {
		const settings = sanitizeDocument(document);
		
		return {
			meta: sanitizeDocument(settings.siteMeta)
		}
	}
};