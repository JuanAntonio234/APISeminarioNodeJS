import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'API de Actividades', // Título general de la API
      version: '1.0.0',
      description: 'API para gestionar actividades deportivas', // Descripción de la API
    },
    servers: [
      {
        url: `http://localhost:3000`, // El servidor donde la API se ejecuta
        description: 'Servidor local para desarrollo', // Descripción del servidor
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Especifica las rutas que Swagger debe leer para la documentación
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Función para configurar Swagger en el servidor
const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
