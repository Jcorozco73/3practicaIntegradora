import swaggerJSDoc from 'swagger-jsdoc'
import __dirname from '../utils.js'

const swaggerOptions = {
    definition: {
      openapi: '3.0.1',
      info: {
        title: 'API Proyecto Final 2023',
        description: 'API CoderHouse Proyecto Final 2023',
      }
    },
    apis: [`${__dirname}/docs/**/*.yml`]
  }

export const specs = swaggerJSDoc(swaggerOptions)