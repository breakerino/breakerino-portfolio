// ---------------------------------------------------------------------
// Settings > Routes
// ---------------------------------------------------------------------

export default {
  routes: [
    {
     method: 'GET',
     path: '/settings/site',
     handler: 'settings.getSiteSettings',
    },
    {
     method: 'GET',
     path: '/settings/personal',
     handler: 'settings.getPersonalSettings',
    },
  ],
};