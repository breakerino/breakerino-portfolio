// --------------------------------------------------------------------- 
// Api > Sections > Services > Sections
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import _ from 'lodash';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DEFAULT_SITE_LOCALE } from '../../../utils/constants';
import { GenericException } from '../../../utils/errors';
import { deepDocumentPopulate, populateDocumentData, sanitizeDocument } from '../../../utils/functions';
import { Section } from '../types';
// --------------------------------------------------------------------- 

export default {
	async getSection(id: string) {
		const globalSettings = await strapi.service('api::settings.settings').getSettings();

		try {
			// @ts-expect-error Dynamic content type assignment
			const document = (await strapi.documents(`api::sections.${id}-section`)?.findFirst({
				populate: deepDocumentPopulate(`api::sections.${id}-section`),
				status: 'published',
				locale: DEFAULT_SITE_LOCALE
			})) ?? {};

			const sanitizedData = this.sanitizeData(document);

			return populateDocumentData(sanitizedData, globalSettings);
		} catch (error) {
			throw new GenericException(`Document for section "${id}" not found.`)
		}
	},

	async getSections() {
		const globalSettings = await strapi.service('api::settings.settings').getSettings();
		const sections = [];

		for (let { heading, ...section } of (globalSettings.layout.sections as Section[])) {
			try {
				// @ts-expect-error Dynamic content type assignment
				const document = (await strapi.documents(`api::sections.${section.id}-section`)?.findFirst({
					populate: deepDocumentPopulate(`api::sections.${section.id}-section`),
					status: 'published',
					locale: DEFAULT_SITE_LOCALE
				})) ?? {};

				let data = this.sanitizeData(document);
				data = populateDocumentData(data, globalSettings);

				section = { ...section, data: { ...data, heading } };

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