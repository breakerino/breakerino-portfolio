// --------------------------------------------------------------------- 
// Api > Settings > Services > Settings
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import _ from 'lodash';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { SettingsType } from '../types';
// --------------------------------------------------------------------- 

export default {
	async getSettings(types: SettingsType[] = ['general', 'site', 'personal', 'layout']) {
		const settings: Partial<Record<SettingsType, Record<string, any>>> = {};
		
		for ( const type of types ) {
			const data = await strapi.service(`api::settings.${type}`).getSettings()
			settings[type] = data;
		}
		
		return settings;
	}
};