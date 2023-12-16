import swaggerJSDoc from 'swagger-jsdoc'
import __dirname from '../utils.js'

const swaggerOptions = {
    definition: {
      openapi: '3.0.1',
      info: {
        title: 'API Proyecto Final',
        description: 'API CoderHouse Proyecto Final',
      }
    },
    apis: [`${__dirname}/docs/**/*.yml`]
  }

export const specs = swaggerJSDoc(swaggerOptions)