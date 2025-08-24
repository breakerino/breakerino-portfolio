// --------------------------------------------------------------------- 
// Api > Sections > Services > Sections
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import _ from 'lodash';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_SITE_LOCALE } from '../../../utils/constants';
import { deepDocumentPopulate, populateDocumentData, sanitizeDocument } from '../../../utils/functions';
import { Section } from '../types';
// --------------------------------------------------------------------- 

export default {
	async getSections() {
		const globalSettings = await strapi.service('api::settings.settings').getSettings();
		const sections = [];

		for (let section of (globalSettings.layout.sections as Section[])) {
			try {
				const populate = deepDocumentPopulate(`api::sections.${section.id}`);

				// @ts-expect-error Dynamic content type assignment
				const document = (await strapi.documents(`api::sections.${section.id}`)?.findFirst({
					populate: populate,
					status: 'published',
					locale: DEFAULT_SITE_LOCALE
				})) ?? {};

				let data = this.sanitizeData(document);
				data = populateDocumentData(data, globalSettings);

				section = { ...section, ...data };

			} catch (error) {
				strapi.log.error(`Document for section "${section.id}" not found.`)
			}

			sections.push(section)
		}

		return sections;
	},

	sanitizeData(document: Record<string, any>) {
		return sanitizeDocument(document, true);
	}
};