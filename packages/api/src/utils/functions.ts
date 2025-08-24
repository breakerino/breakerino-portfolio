// --------------------------------------------------------------------- 
// Utils > Functions
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import _ from 'lodash';
import Mustache from 'mustache';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { DOCUMENT_KEYS_TO_OMIT } from './constants';
// --------------------------------------------------------------------- 

export const omitRecursively = (obj: Record<string, any>, keys: string[]): any => {
	if (_.isArray(obj)) {
		return obj.map((item) => omitRecursively(item, keys));
	} else if (_.isPlainObject(obj)) {
		const omitted = _.omit(obj, keys);
		return _.mapValues(omitted, (value) => omitRecursively(value, keys));
	}

	return obj;
};

export const sanitizeDocument = (
  document: Record<string, any>,
  deep: boolean = true,
	keys: string[] = []
): Record<string, any> => {
	return omitRecursively({...document}, [...DOCUMENT_KEYS_TO_OMIT, ...keys]);
	
	// NOTE: Disabledd deep support because fucking piece of shit anomaly happening, inversed logic for "deep" boolean
  // return ! deep
	// 	? omitRecursively(document, [...DOCUMENT_KEYS_TO_OMIT, ...keys])
	// 	: _.omit(document, [...DOCUMENT_KEYS_TO_OMIT, ...keys]);
};

export const deepDocumentPopulate = (uid: string) => {
  const schema = strapi.contentTypes[uid];
  const populate: Record<string, any> = {};

  for (const [attribute, config] of Object.entries<any>(schema.attributes)) {
    if (['component', 'dynamiczone', 'relation', 'media'].includes(config.type)) {
      populate[attribute] = { populate: '*' };
    }
  }

  return populate;
}

export const populateDocumentData = (document: unknown, data: Record<string, any>): Record<string, any> => {
	if (_.isString(document)) {
		return Mustache.render(document, data) as any;
	}

	if (_.isArray(document)) {
		return document.map((item) => populateDocumentData(item, data)) as any;
	}

	if (_.isPlainObject(document)) {
		return Object.fromEntries(
			Object.entries(document).map(([key, value]) => [key, populateDocumentData(value, data)])
		);
	}

	return document;
}