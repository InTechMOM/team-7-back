import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MVP Team7 IntechMom',
      version: '1.0.0',
    },
  },
  apis: [
    'app.js',
    './src/api/users/controllers/post.js',
    './src/api/users/controllers/get.js',
    './src/api/users/controllers/delete.js',
    './src/api/users/controllers/put.js',
    './src/api/videos/controllers/post.js',
    './src/api/videos/controllers/get.js',
    './src/api/qualifications/controllers/post.js',
    './src/api/qualifications/controllers/get.js',
    ], //ubicacion de las apis
};

export const openApiSpecification = swaggerJSDoc(swaggerOptions);
