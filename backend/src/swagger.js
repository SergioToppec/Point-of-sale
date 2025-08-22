const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require ('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'POS API',
            version: '1.0.0',
            description: 'API for a point of sale system'
        }
    },
    apis: ['./src/routes/*.js'], // Path to the API docs
};

const specs = swaggerJsDoc(options);
module.exports = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
}