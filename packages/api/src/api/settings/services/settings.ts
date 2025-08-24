// --------------------------------------------------------------------- 
// Api > Settings > Services > Settings
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		const site = await strapi.service('api::settings.personal').getSettings();
		const personal = await strapi.service('api::settings.personal').getSettings();
		const layout = await strapi.service('api::settings.layout').getSettings();

		return { site, personal, layout }
	}
};