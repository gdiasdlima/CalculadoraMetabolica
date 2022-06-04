import paths from './paths'
import schemas from './schemas'

export default {
    openapi: '3.0.0',
    info: {
        title: 'Calculadora Metabolica Api',
        version: '1.0.0', 
        description: 'Api para calcular macronutrientes'
    },
    servers: [{
        url: '/api'
    }],
    tags: [{
        name: 'Login'
    },
    { 
        name: 'Calculadora'
    },
    {
        name: 'Alimentos'
    }
],
paths,
schemas
}