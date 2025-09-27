// --------------------------------------------------------------------- 
// Actions > Sort skills
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import skills from './data/skills';
// --------------------------------------------------------------------- 

export default async function sortSkills() {
	for ( const [order, {documentId, name}] of skills.entries() ) {
		strapi.log.info(`Setting skill "${name}" (${documentId}) order to "${order}"...`)
		
		await strapi.documents('api::portfolio.skill').update({
			documentId,
			data: { order }
		})
	}
}