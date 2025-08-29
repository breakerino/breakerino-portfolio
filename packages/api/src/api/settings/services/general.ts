// --------------------------------------------------------------------- 
// Api > Settings > Services > General
// --------------------------------------------------------------------- 

export default {
	async getSettings() {
		return {
			year: new Date().getFullYear()
		}
	},
};