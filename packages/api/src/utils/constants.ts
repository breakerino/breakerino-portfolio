// --------------------------------------------------------------------- 
// Utils > Constants
// --------------------------------------------------------------------- 
export const DEFAULT_SITE_LOCALE = 'en';

export const SETTINGS_FIELDS_TO_OMIT = [ 
	'settingsName',
];

export const IMAGE_FIELDS_TO_OMIT = [
	'caption',
	'formats',
	'hash',
	'ext',
	'mime',
	'size',
	'previewUrl',
	'provider',
	'provider_metadata',
	'folderPath',
	'locale',
];

export const DOCUMENT_KEYS_TO_OMIT = [
	'id',
	'documentId',
	'createdAt',
	'updatedAt',
	'createdBy',
	'updatedBy',
	'localizations',
	'publishedAt',
	'locale',
	...IMAGE_FIELDS_TO_OMIT,
	...SETTINGS_FIELDS_TO_OMIT,
];