export const getAlimentosByIDPath = {
    get: {
      tags: ['Alimentos'],
      summary: 'API para alimentos',
      parameters: [{
        in: 'query',
        name: 'id',
        description: 'ID do Alimentos',
        required: true,
        schema: {
          type: 'integer'
        }
      }],
      responses: {
        200: {
          description: 'sucesso'
        }
      }
    }
  }
  