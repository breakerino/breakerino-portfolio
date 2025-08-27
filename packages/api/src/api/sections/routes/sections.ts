// --------------------------------------------------------------------- 
// Api > Sections > Routes > Sections
// --------------------------------------------------------------------- 

export default {
  routes: [
    {
     method: 'GET',
     path: '/sections',
     handler: 'sections.getSections',
    },
    {
     method: 'GET',
     path: '/sections/:id',
     handler: 'sections.getSection',
    },
  ],
};
