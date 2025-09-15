// --------------------------------------------------------------------- 
import type { Core } from '@strapi/strapi';
// --------------------------------------------------------------------- 
import { refreshAppCache } from './hooks/refreshAppCache';
// --------------------------------------------------------------------- 

export default {
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const lifecycleEvents = ['afterCreate', 'afterUpdate'];

    Object.values(strapi.contentTypes).forEach((contentType) => {
      const uid = contentType.uid;

      lifecycleEvents.forEach((event) => {
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