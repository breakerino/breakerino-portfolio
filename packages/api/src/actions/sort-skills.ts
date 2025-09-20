// --------------------------------------------------------------------- 
// Actions > Sort skills
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import skills from './data/skills';
// --------------------------------------------------------------------- 

export default async function sortSkills() {
	for ( const [order, {documentId}] of skills.entries() ) {
		await strapi.documents('api::portfolio.skill').update({
			documentId,
			data: { order }
		})
	}
}