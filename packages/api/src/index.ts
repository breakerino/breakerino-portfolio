// --------------------------------------------------------------------- 
// Global > Lifecycles
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import type { Core } from '@strapi/strapi';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import refreshAppCache from './actions/refresh-app-cache';
import sortSkills from './actions/sort-skills';
// --------------------------------------------------------------------- 

export default {
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
		// Actions > Sort skills
		await sortSkills();
		
		// Actions > Refresh app cache
		await refreshAppCache();
		
    Object.values(strapi.contentTypes).forEach((contentType) => {
      const uid = contentType.uid;

      ['afterCreate', 'afterUpdate'].forEach((event) => {
        strapi.db.lifecycles.subscribe({
          models: [uid],
          [event]: async ({ result }) => {
            if ('publishedAt' in result && result.publishedAt) {
              refreshAppCache();
            }
          },
        });
      });
    });
  },
};