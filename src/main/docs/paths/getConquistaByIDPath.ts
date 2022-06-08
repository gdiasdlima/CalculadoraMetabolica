export const getConquistaByIDPath = {
    get: {
      tags: ['Conquista'],
      summary: 'API para conquistas',
      parameters: [{
        in: 'query',
        name: 'id',
        description: 'ID da pessoa',
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
  