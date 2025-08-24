// --------------------------------------------------------------------- 
// Settings > Services > Site
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_SITE_LOCALE } from '../../../utils/constants';
import { sanitizeDocument, sanitizeImage } from '../../../utils/functions';
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		const settings = await strapi.documents('api::settings.site').findFirst({
			populate: {
				siteMeta: true,
				siteLogo: { populate: { image: true } },
				siteNavigation: true
			},
			locale: DEFAULT_SITE_LOCALE,
			status: 'published',
		});

		return this.sanitizeSettings(settings);
	},

	sanitizeSettings(document: Record<string, unknown>) {
		const settings = sanitizeDocument(document);
		
		return {
			meta: sanitizeDocument(settings.siteMeta),
			logo: {
				...settings.siteLogo,
				image: sanitizeImage(settings.siteLogo.image)
			},
			navigation: settings?.siteNavigation?.map(sanitizeDocument),
		}
	}
};