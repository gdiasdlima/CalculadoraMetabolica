export const createRefeicaoPath = {
    post: {
      tags: ['Refeicao'],
      summary: 'API para controlar Refeicao',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/createRefeicaoParams'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'sucesso'
        }
      }
    }
  }
  