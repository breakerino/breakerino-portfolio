// --------------------------------------------------------------------- 
// Api > Settings > Services > Site
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_SITE_LOCALE } from '../../../utils/constants';
import { sanitizeDocument, deepDocumentPopulate, populateDocumentData } from '../../../utils/functions';
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		const globalSettings = await strapi.service('api::settings.settings').getSettings(['personal']);
		
		let settings = (await strapi.documents('api::settings.site').findFirst({
			populate: deepDocumentPopulate('api::settings.site'),
			locale: DEFAULT_SITE_LOCALE,
			status: 'published',
		}) as Record<string, any>);
		
		settings = this.sanitizeSettings(settings);
		settings = populateDocumentData(settings, globalSettings);

		return settings;
	},

	sanitizeSettings(document: Record<string, unknown>) {
		const settings = sanitizeDocument(document);
		
		return {
			meta: sanitizeDocument(settings.seoMeta)
		}
	}
};