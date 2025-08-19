// --------------------------------------------------------------------- 
// Routes > Breakerino
// --------------------------------------------------------------------- 

export default {
  routes: [
    {
     method: 'GET',
     path: '/breakerino/data',
     handler: 'breakerino.getData',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
