export const getAllRefeicaoPath = {
    get: {
      tags: ['Refeicao'],
      summary: 'API para controlar Refeicao',
      parameters: [{
        in: 'query',
        name: 'idPessoa',
        description: 'ID Da Pessoa',
        required: true,
        schema: {
          type: 'integer'
        }
      },
      {
        in: 'query',
        name: 'dataRefeicao',
        description: 'data da refeicao',
        schema: {
          type: 'string',
          format: 'date'
        }
      }]
      ,
      responses: {
        200: {
          description: 'sucesso'
        }
      }
    }
  }
  