// --------------------------------------------------------------------- 
// Api > Settings > Services > Layout
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { deepDocumentPopulate, sanitizeDocument } from '../../../utils/functions';
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		const settings = await strapi.documents('api::settings.layout').findFirst({
			populate: deepDocumentPopulate('api::settings.layout'),
			status: 'published',
		});

		return this.sanitizeSettings(settings);
	},

	sanitizeSettings(document: Record<string, unknown>) {
		const settings = sanitizeDocument(document);

		return {
			...settings,
			sections: settings.sections.map(({ sectionID: id, sectionHeading: heading }) => {
				return { id, ...(heading ? {heading} : {}) }
			})
		}
	}
};