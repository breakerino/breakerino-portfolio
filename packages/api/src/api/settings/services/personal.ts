// --------------------------------------------------------------------- 
// Api > Settings > Services > Personal
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import moment from 'moment';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_SITE_LOCALE } from '../../../utils/constants';
import { buildDeepPopulate, sanitizeDocument } from '../../../utils/functions';
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		const settings = await strapi.documents('api::settings.personal').findFirst({
			populate: buildDeepPopulate('api::settings.site'),
			locale: DEFAULT_SITE_LOCALE,
			status: 'published',
		});

		return this.sanitizeSettings(settings);
	},
	
	sanitizeSettings(document: Record<string, unknown>) {
		const settings = sanitizeDocument(document);
	
		return {
			age: moment().diff(moment(settings.birthDate), 'years'),
			yearsOfExperience: moment().diff(moment(settings.careerStartDate), 'years'),
			location: settings.location,
			socials: settings.socials.map(sanitizeDocument)
		};
	}
};