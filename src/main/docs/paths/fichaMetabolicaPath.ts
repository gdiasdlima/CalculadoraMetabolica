export const fichaMetabolicaPath = {
    post: {
      tags: ['Calculadora'],
      summary: 'API para calculos Metabolicos',
      parameters: [{
        in: 'query',
        name: 'idPessoa',
        description: 'ID Da Pessoa',
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
  