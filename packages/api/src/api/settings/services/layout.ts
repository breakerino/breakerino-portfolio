// --------------------------------------------------------------------- 
// Api > Settings > Services > Layout
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { buildDeepPopulate, sanitizeDocument } from '../../../utils/functions';
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		const settings = await strapi.documents('api::settings.layout').findFirst({
			populate: buildDeepPopulate('api::settings.site'),
			status: 'published',
		});

		return this.sanitizeSettings(settings);
	},

	sanitizeSettings(document: Record<string, unknown>) {
		const settings = sanitizeDocument(document);

		return {
			...settings,
			sections: settings.sections.map(({ sectionID: id, sectionComponent: component, sectionHeading: heading }) => {
				return { id, component, heading }
			})
		}
	}
};